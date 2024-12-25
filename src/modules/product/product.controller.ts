import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateProductDto, UpdateProductDto } from './dto/request-dto'
import { ProductService } from './product.service'

@Controller('product')
@UsePipes(new ValidationPipe())
@ApiTags('Product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post()
	@ApiOperation({ summary: 'Create a New Product' })
	create(@Body() createProductDto: CreateProductDto) {
		return this.productService.create(createProductDto)
	}

	@Get()
	@ApiOperation({ summary: 'List all products' })
	findAll() {
		return this.productService.findAll()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get a Product' })
	findOne(@Param('id') id: string) {
		return this.productService.findOne(+id)
	}

	@Put()
	@ApiOperation({ summary: 'Update a Product' })
	update(@Body() updateProductDto: UpdateProductDto) {
		return this.productService.update(updateProductDto)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete a Product' })
	remove(@Param('id') id: string) {
		return this.productService.remove(+id)
	}
}
