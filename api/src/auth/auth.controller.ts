import { UnauthorizedException, Controller, Body, Post } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { ResponseInterface } from '@common/interfaces'
import { ResponseService } from '@common/classes'

import { AuthService } from './auth.service'
import { AuthResponseEnum } from './enums'
import { LoginDto } from './dto'

@Controller('auth')
export class AuthController {
	private responseService: ResponseService

	constructor(private readonly authService: AuthService) {
		this.responseService = new ResponseService(AuthResponseEnum)
	}

	@Post('login')
	@ApiOperation({
		description: 'This endpoint the user log in and obtains an access token.',
		summary: 'The user log in',
	})
	async login(
		@Body() { email, password }: LoginDto
	): Promise<ResponseInterface> {
		const userValidate = await this.authService.validateUser(email, password)

		if (!userValidate)
			throw new UnauthorizedException(AuthResponseEnum.ERROR_CREDENTIAL)

		const jwtData = await this.authService.generateToken(userValidate)

		return this.responseService.handlerResponse(
			true,
			AuthResponseEnum.SUCCESS,
			jwtData
		)
	}
}
