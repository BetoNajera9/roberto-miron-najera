import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { IsObjectIdPipe } from 'nestjs-object-id'
import {
	Controller,
	Delete,
	Query,
	Param,
	Patch,
	Body,
	Post,
	Get,
} from '@nestjs/common'

import { ResponseInterface } from '@common/interfaces'
import { ResponseService } from '@common/classes'
import { PageOptionsDto } from '@common/dto'

import { CreateUserDto, UpdateUserDto } from './dto'
import { UserService } from './user.service'
import { UserResponseEnum } from './enums'

@Controller('user')
@ApiTags('User')
export class UserController {
	private responseService: ResponseService

	constructor(private readonly userService: UserService) {
		this.responseService = new ResponseService(UserResponseEnum)
	}

	@Post()
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
		const user = await this.userService.findOne(id)

		return this.responseService.handlerResponse(
			true,
			UserResponseEnum.SEARCH,
			user
		)
	}

	@Patch(':id')
	@ApiOperation({
		description:
			'This endpoint updates my user data, which can be first name, last name and/or email address.',
		summary: 'Update user',
	})
	async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		const user = await this.userService.update(id, updateUserDto)

		return this.responseService.handlerResponse(
			true,
			UserResponseEnum.UPDATE,
			user
		)
	}

	@Delete(':id')
	@ApiOperation({
		description:
			'This endpoint removes the user with the payload identifier from the access token.',
		summary: 'Delete my user',
	})
	async remove(@Param('id', IsObjectIdPipe) id: string) {
		const user = await this.userService.remove(id)

		return this.responseService.handlerResponse(
			true,
			UserResponseEnum.REMOVE,
			user
		)
	}
}
