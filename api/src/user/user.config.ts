import { ConfigModule, registerAs } from '@nestjs/config'
import * as Joi from 'joi'

import { isProduction } from '@server/app.config'

// Normalize variables of this module
export const config = registerAs('user', () => ({
	saltRounds: +process.env.SALT_ROUNDS,
}))

export default {
	// Verifying if exists all variables for this module
	ConfigModule: ConfigModule.forRoot({
		ignoreEnvFile: isProduction(),
		isGlobal: false,
		load: [config],
		validationSchema: Joi.object({
			SALT_ROUNDS: Joi.number().integer().required(),
		}),
	}),
}
