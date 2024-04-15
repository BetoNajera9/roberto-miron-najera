import { Module } from '@nestjs/common'

import { ProductModule } from '@product/product.module'
import { AuthModule } from '@auth/auth.module'
import { UserModule } from '@user/user.module'
import { DbModule } from '@db/db.module'

@Module({
	imports: [DbModule, ProductModule, UserModule, AuthModule],
})
export class AppModule {}
