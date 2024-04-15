import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import * as Jwt from 'jsonwebtoken'
import * as Bcrypt from 'bcrypt'

import { AccessTokenService } from '@access-token/access-token.service'
import { CreateAccessTokenDto } from '@access-token/dto'
import { UserService } from '@user/user.service'
import { UserDto } from '@user/dto'

import { config } from './auth.config'
import {
	AuthResponseInterface,
	SignTokenInterface,
	PayloadInterface,
} from './interfaces'

@Injectable()
export class AuthService {
	constructor(
		@Inject(config.KEY)
		private readonly configAuthService: ConfigType<typeof config>,
		private readonly accessTokenService: AccessTokenService,
		private readonly userService: UserService
	) {}

	public async validateUser(email: string, password: string): Promise<UserDto> {
		const userData = await this.userService.findOne({ email })

		if (userData) {
			const matchPassword = await Bcrypt.compare(password, userData.password)

			if (matchPassword) return userData
		}

		return null
	}

	private async verifyAndSaveToken(data: CreateAccessTokenDto): Promise<void> {
		const token = await this.accessTokenService.findOne({ userId: data.userId })

		if (!token) await this.accessTokenService.create(data)
		else await this.accessTokenService.update({ id: token.id }, data)
	}

	public signToken({ payload, secret, expires }: SignTokenInterface): string {
		return Jwt.sign(payload, secret, { expiresIn: expires })
	}

	public async generateToken(data: UserDto): Promise<AuthResponseInterface> {
		const payload: PayloadInterface = {
			name: data.name,
			sub: data.id,
		}

		const accessToken = this.signToken({
			expires: this.configAuthService.jwtExpires,
			secret: this.configAuthService.jwtSecret,
			payload,
		})

		const { exp: expiredAt } = Jwt.decode(accessToken)

		const saveToken: CreateAccessTokenDto = {
			userId: data.id,
			token: accessToken,
			expiredAt: new Date(expiredAt),
		}

		await this.verifyAndSaveToken(saveToken)

		return {
			accessToken,
			user: data,
		}
	}
}
