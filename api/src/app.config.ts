import { ConfigModule, registerAs } from '@nestjs/config'
import * as Joi from 'joi'

export const isProduction = () => process.env.API_ENVIRONMENT === 'production'

export default {
	ConfigModule: ConfigModule.forRoot({
		ignoreEnvFile: isProduction(),
		isGlobal: true,
		validationSchema: Joi.object({
			DATABASE_URL: Joi.string().required(),
		}),
	}),
}
