import { ConfigModule, registerAs } from '@nestjs/config'
import * as Joi from 'joi'

import { isProduction } from '@server/app.config'
import { CarrierDto, LocationDto, SettingsDto } from './dto'

// Normalize variables of this module
export const config = registerAs('shipment', () => ({
	origin: {
		name: 'Alex',
		company: 'envia',
		email: 'noreply@envia.com',
		phone: '8110000ewdased000',
		street: 'shreeji sadan 24 bhandarkar rd',
		number: 'opposite matunga kabutar khana',
		district: '',
		city: 'Monterrey',
		state: 'NL',
		category: 1,
		country: 'MX',
		postalCode: '66236',
		reference: '',
		coordinates: {
			latitude: '19.027686',
			longitude: '72.853462',
		},
	} as LocationDto,

	shipment: {
		carrier: 'fedex',
		service: 'ground',
		type: 1,
	} as CarrierDto,

	settings: {
		printFormat: 'PDF',
		printSize: 'STOCK_4X6',
		currency: 'MXN',
		cashOnDelivery: '0',
		comments: '',
	} as SettingsDto,
}))

export const configObject = {
	shipmentToken: process.env.SHIPMENT_TOKEN,
}

export default {
	// Verifying if exists all variables for this module
	ConfigModule: ConfigModule.forRoot({
		ignoreEnvFile: isProduction(),
		isGlobal: false,
		load: [config],
		validationSchema: Joi.object({
			SHIPMENT_TOKEN: Joi.string().required(),
		}),
	}),
}
