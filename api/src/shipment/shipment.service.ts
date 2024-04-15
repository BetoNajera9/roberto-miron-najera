import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { HttpService } from '@nestjs/axios'

import { config } from './shipment.config'
import { ShipmentEnpoints } from './utils'
import { CreateShipmentDto } from './dto'
import {
	ResponseShipmentsInterface,
	ShipmentsDataInterface,
} from './interfaces'

@Injectable()
export class ShipmentService {
	constructor(
		@Inject(config.KEY)
		private readonly configShipmentService: ConfigType<typeof config>,
		private client: HttpService
	) { }

	async budget(
		createShipment: CreateShipmentDto
	): Promise<ShipmentsDataInterface[]> {
		const reqData = {
			origin: this.configShipmentService.origin,
			destination: createShipment.destination,
			packages: createShipment.packages,
			shipment: this.configShipmentService.shipment,
			settings: this.configShipmentService.settings,
		}

		const { data: resData } =
			await this.client.axiosRef.post<ResponseShipmentsInterface>(
				ShipmentEnpoints.budget(),
				reqData
			)

		return resData.data
	}

	async guide(
		createShipment: CreateShipmentDto
	): Promise<string> {
		const reqData = {
			origin: this.configShipmentService.origin,
			destination: createShipment.destination,
			packages: createShipment.packages,
			shipment: this.configShipmentService.shipment,
			settings: this.configShipmentService.settings,
		}

		const { data: resData } = await this.client.axiosRef.get(
			ShipmentEnpoints.guide(),
			{ data: reqData }
		)

		return resData
	}
}
