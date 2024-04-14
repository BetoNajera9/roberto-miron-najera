import { Inject, Injectable, NotFoundException } from '@nestjs/common'

import { PageDto, PageMetaDto, PageOptionsDto } from '@common/dto'
import { ErrorResponseEnum } from '@common/enums'
import { DbService } from '@db/db.service'

import { CreateUserDto, UpdateUserDto } from './dto'

@Injectable()
export class UserService {
	constructor(@Inject(DbService) private dbService: DbService) {}

	async create(data: CreateUserDto): Promise<CreateUserDto> {
		return await this.dbService.user.create({ data })
	}

	async findAll(pageOptions: PageOptionsDto): Promise<PageDto<CreateUserDto>> {
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

	async findOne(id: string): Promise<CreateUserDto> {
		const user = await this.dbService.user.findUnique({
			where: { id },
		})

		if (!user) throw new NotFoundException(ErrorResponseEnum.NOT_FOUND)

		return user
	}

	async update(id: string, data: UpdateUserDto): Promise<CreateUserDto> {
		await this.findOne(id)

		return await this.dbService.user.update({
			where: { id },
			data,
		})
	}

	async remove(id: string): Promise<CreateUserDto> {
		await this.findOne(id)

		return await this.dbService.user.delete({
			where: { id },
		})
	}
}
