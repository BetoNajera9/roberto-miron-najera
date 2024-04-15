import { Module } from '@nestjs/common'

import { AccessTokenService } from '@access-token/access-token.service'
import { DbModule } from '@db/db.module'

import { UserController } from './user.controller'
import { UserService } from './user.service'
import Config from './user.config'

@Module({
	imports: [Config.ConfigModule, DbModule],
	controllers: [UserController],
	providers: [UserService, AccessTokenService],
	exports: [UserService],
})
export class UserModule {}
