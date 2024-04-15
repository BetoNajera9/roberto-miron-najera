import { Module } from '@nestjs/common'

import { ProductModule } from '@product/product.module'
import { AuthModule } from '@auth/auth.module'
import { UserModule } from '@user/user.module'
import { DbModule } from '@db/db.module'
import { ShipmentModule } from './shipment/shipment.module'

@Module({
	imports: [DbModule, ProductModule, UserModule, AuthModule, ShipmentModule],
})
export class AppModule {}
