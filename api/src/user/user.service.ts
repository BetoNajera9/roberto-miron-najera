import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import * as Bcrypt from 'bcrypt'

import { AccessTokenService } from '@access-token/access-token.service'
import { PageDto, PageMetaDto, PageOptionsDto } from '@common/dto'
import { ErrorResponseEnum } from '@common/enums'
import { DbService } from '@db/db.service'

import { CreateUserDto, FindUserDto, UpdateUserDto, UserDto } from './dto'
import { config } from './user.config'

@Injectable()
export class UserService {
	constructor(
		@Inject(config.KEY)
		private readonly configUserService: ConfigType<typeof config>,
		@Inject(AccessTokenService) private accessTokenService: AccessTokenService,
		@Inject(DbService) private dbService: DbService
	) {}

	async create(data: CreateUserDto): Promise<UserDto> {
		data.password = await Bcrypt.hash(
			data.password,
			this.configUserService.saltRounds
		)

		return await this.dbService.user.create({ data })
	}

	async findAll(pageOptions: PageOptionsDto): Promise<PageDto<UserDto>> {
		const users = await this.dbService.user.findMany({
			skip: (pageOptions.page - 1) * pageOptions.take,
			take: pageOptions.take,
			orderBy: {
				createdAt: pageOptions.order,
			},
		})

		if (!users.length) throw new NotFoundException(ErrorResponseEnum.NOT_FOUND)

		const count = await this.dbService.user.count()

		const pageMetaDto = new PageMetaDto({
			itemCount: count,
			pageOptionsDto: pageOptions,
		})

		return new PageDto(users, pageMetaDto)
	}

	async findOne(query: FindUserDto): Promise<UserDto> {
		const user = await this.dbService.user.findFirst({
			where: query,
		})

		if (!user) throw new NotFoundException(ErrorResponseEnum.NOT_FOUND)

		return user
	}

	async update(id: string, data: UpdateUserDto): Promise<UserDto> {
		await this.findOne({ id })

		return await this.dbService.user.update({
			where: { id },
			data,
		})
	}

	async remove(id: string): Promise<UserDto> {
		await this.findOne({ id })

		await this.accessTokenService.remove({ userId: id })

		return await this.dbService.user.delete({
			where: { id },
		})
	}
}
