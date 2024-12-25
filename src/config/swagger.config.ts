import { DocumentBuilder } from '@nestjs/swagger'

export const swagger = new DocumentBuilder()
	.setTitle('Dockerize Api Docs')
	.setDescription('This is api docs for application')
	.setVersion('1.0.1')
	.build()
