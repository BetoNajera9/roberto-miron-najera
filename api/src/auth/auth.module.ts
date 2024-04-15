import { Global, Module } from '@nestjs/common'

import { AccessTokenService } from '@access-token/access-token.service'
import { DbModule } from '@server/db/db.module'
import { UserModule } from '@user/user.module'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import Config from './auth.config'

@Global()
@Module({
	imports: [Config.ConfigModule, UserModule],
	providers: [AuthService, AccessTokenService],
	controllers: [AuthController],
})
export class AuthModule {}
