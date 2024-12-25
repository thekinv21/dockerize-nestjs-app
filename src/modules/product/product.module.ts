import { Module } from '@nestjs/common'

import { PrismaService } from '@/prisma'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'

@Module({
	imports: [],
	controllers: [ProductController],
	providers: [ProductService, PrismaService],
	exports: [ProductService]
})
export class ProductModule {}
