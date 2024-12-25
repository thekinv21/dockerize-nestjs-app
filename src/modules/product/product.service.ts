import { PrismaService } from '@/root/prisma'
import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { CreateProductDto, UpdateProductDto } from './dto/request-dto'
import { ProductResponseDto } from './dto/response-dto'

@Injectable()
export class ProductService {

	constructor(
		private readonly prismaService: PrismaService,
	) {}

	create(createProductDto: CreateProductDto) {
		const newProduct = this.prismaService.product.create({
			data: createProductDto
		})
		return plainToInstance(ProductResponseDto, newProduct)
	}

	findAll() {
		const products = this.prismaService.product.findMany()
		return plainToInstance(ProductResponseDto, products)
	}

	findOne(id: number) {
		const product = this.prismaService.product.findUnique({
			where: { id }
		})
		return plainToInstance(ProductResponseDto, product)
	}

	update(updateProductDto: UpdateProductDto) {
		const updatedProduct = this.prismaService.product.update({
			where: { id: updateProductDto.id },
			data: updateProductDto
		})
		return plainToInstance(ProductResponseDto, updatedProduct)
	}

	remove(id: number) {
		const deletedProduct = this.prismaService.product.delete({
			where: { id }
		})
		return plainToInstance(ProductResponseDto, deletedProduct)
	}
}
