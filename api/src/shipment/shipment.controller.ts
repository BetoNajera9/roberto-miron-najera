import { Controller, Post, Body, Get } from '@nestjs/common'

import { ResponseInterface } from '@common/interfaces'
import { ResponseService } from '@common/classes'

import { ShipmentService } from './shipment.service'
import { ShipmentResponseEnum } from './enums'
import { CreateShipmentDto } from './dto'

@Controller('shipment')
export class ShipmentController {
	private responseService: ResponseService

	constructor(private readonly shipmentService: ShipmentService) {
		this.responseService = new ResponseService(ShipmentResponseEnum)
	}

	@Post('budget')
	async budget(
		@Body() createShipmentDto: CreateShipmentDto
	): Promise<ResponseInterface> {
		const budget = await this.shipmentService.budget(createShipmentDto)

		return this.responseService.handlerResponse(
			true,
			ShipmentResponseEnum.BUDGET,
			budget
		)
	}

	@Get('guide')
	async guide(
		@Body() createShipmentDto: CreateShipmentDto
	): Promise<ResponseInterface> {
		const budget = await this.shipmentService.guide(createShipmentDto)

		return this.responseService.handlerResponse(
			true,
			ShipmentResponseEnum.GUIDE,
			budget
		)
	}
}
