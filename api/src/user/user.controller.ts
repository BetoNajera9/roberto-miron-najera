import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { IsObjectIdPipe } from 'nestjs-object-id'
import {
	Controller,
	UseGuards,
	Delete,
	Query,
	Param,
	Patch,
	Body,
	Post,
	Get,
} from '@nestjs/common'

import { ResponseInterface } from '@common/interfaces'
import { PublicAccess } from '@common/decorators'
import { ResponseService } from '@common/classes'
import { PageOptionsDto } from '@common/dto'
import { AuthGuard } from '@auth/guards'

import { CreateUserDto, UpdateUserDto } from './dto'
import { UserService } from './user.service'
import { UserResponseEnum } from './enums'

@UseGuards(AuthGuard)
@Controller('user')
@ApiTags('User')
export class UserController {
	private responseService: ResponseService

	constructor(private readonly userService: UserService) {
		this.responseService = new ResponseService(UserResponseEnum)
	}

	@Post()
	@PublicAccess()
	@ApiOperation({
		description: 'This endpoint creates the registration of a new user.',
		summary: 'Register user',
	})
	async create(
		@Body() createUserDto: CreateUserDto
	): Promise<ResponseInterface> {
		const user = await this.userService.create(createUserDto)

		return this.responseService.handlerResponse(
			true,
			UserResponseEnum.CREATE,
			user
		)
	}

	@Get()
	@ApiOperation({
		description: 'This endpoint obtains all registered users in database.',
		summary: 'Get all the users',
	})
	async findAll(@Query() pageOptions: PageOptionsDto) {
		const { data, meta } = await this.userService.findAll(pageOptions)

		return this.responseService.handlerResponse(
			true,
			UserResponseEnum.SEARCH,
			data,
			meta
		)
	}

	@Get(':id')
	@ApiOperation({
		description:
			'This endpoint obtains the user with id from the identifier of the parameter.',
		summary: 'Get a user by id',
	})
	async findOne(@Param('id') id: string) {
		const user = await this.userService.findOne({ id })

		return this.responseService.handlerResponse(
			true,
			UserResponseEnum.SEARCH,
			user
		)
	}

	@Patch()
	@ApiOperation({
		description:
			'This endpoint updates my user data, which can be first name, last name and/or email address.',
		summary: 'Update user',
	})
	async update(
		@Body() updateUserDto: UpdateUserDto,
		@Param('userId') userId: string
	) {
		const user = await this.userService.update(userId, updateUserDto)

		return this.responseService.handlerResponse(
			true,
			UserResponseEnum.UPDATE,
			user
		)
	}

	@Delete()
	@ApiOperation({
		description:
			'This endpoint removes the user with the payload identifier from the access token.',
		summary: 'Delete my user',
	})
	async remove(@Param('userId') userId: string) {
		const user = await this.userService.remove(userId)

		return this.responseService.handlerResponse(
			true,
			UserResponseEnum.REMOVE,
			user
		)
	}
}
