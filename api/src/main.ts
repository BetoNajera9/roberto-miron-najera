import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { NestFactory, Reflector } from '@nestjs/core'

import { HandlerError } from '@common/classes'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// Start handlerError
	app.useGlobalFilters(new HandlerError())

	// Swagger configuration
	const config = new DocumentBuilder()
		.setTitle('Backend')
		.setDescription('Store API')
		.setVersion('1.0')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('docs', app, document)

	// Set api prefix
	app.setGlobalPrefix('api')

	// Activate @exclude class-transformer
	const reflector = app.get(Reflector)

	// Start interceptors
	app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector))

	//Set validation pipe
	app.useGlobalPipes(
		new ValidationPipe({
			forbidNonWhitelisted: true,
			whitelist: true,
			transform: true,
		})
	)

	// Enable cors
	app.enableCors();

	await app.listen(3000)
}
bootstrap()
