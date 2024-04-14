import { Module } from '@nestjs/common'

import { ProductModule } from '@product/product.module'
import { UserModule } from '@user/user.module'
import { DbModule } from '@db/db.module'

@Module({
	imports: [DbModule, DbModule, ProductModule, UserModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
