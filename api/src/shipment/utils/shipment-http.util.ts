import { HttpModule } from '@nestjs/axios'

export const ShipmentHttpModule = (apikey: string) =>
	HttpModule.registerAsync({
		useFactory: () => ({
			headers: {
				authorization: `Bearer ${apikey}`,
			},
			timeout: 5000,
			maxRedirects: 3,
		}),
	})
