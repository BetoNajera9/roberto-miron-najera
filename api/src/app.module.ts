import { Module } from '@nestjs/common'

import { ProductModule } from '@product/product.module'
import { DbModule } from '@db/db.module'

@Module({
	imports: [DbModule, DbModule, ProductModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
