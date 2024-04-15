import { Module } from '@nestjs/common'

import { ShipmentController } from './shipment.controller'
import Config, { configObject } from './shipment.config'
import { ShipmentService } from './shipment.service'
import { ShipmentHttpModule } from './utils'

@Module({
	imports: [
		ShipmentHttpModule(configObject.shipmentToken),
		Config.ConfigModule,
	],
	controllers: [ShipmentController],
	providers: [ShipmentService],
})
export class ShipmentModule { }
