import { Reflector } from '@nestjs/core'
import { Request } from 'express'
import {
	UnauthorizedException,
	ExecutionContext,
	CanActivate,
	Injectable,
} from '@nestjs/common'

import { AccessTokenService } from '@access-token/access-token.service'
import { AuthResponseEnum, PrivilegesEnum } from '@auth/enums'
import { UserService } from '@user/user.service'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private readonly accessTokenService: AccessTokenService,
		private readonly userService: UserService,
		private readonly reflector: Reflector
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const isPublic = this.reflector.get<boolean>(
			PrivilegesEnum.PUBLIC_KEY,
			context.getHandler()
		)

		if (isPublic) return true

		const req = context.switchToHttp().getRequest<Request>()

		const bearerToken = req.headers['authorization']
		if (!bearerToken)
			throw new UnauthorizedException(AuthResponseEnum.INVALID_TOKEN)

		const token = bearerToken.replace('Bearer ', '')

		const manageToken = await this.accessTokenService.verifyToken(token)
		if (!manageToken)
			throw new UnauthorizedException(AuthResponseEnum.INVALID_TOKEN)
		if (manageToken.isExpired)
			throw new UnauthorizedException(AuthResponseEnum.EXPIRED_TOKEN)

		const user = await this.userService.findOne({ id: manageToken.userId })
		if (!user) throw new UnauthorizedException(AuthResponseEnum.INVALID_TOKEN)

		req.params.userId = manageToken.userId

		return true
	}
}
