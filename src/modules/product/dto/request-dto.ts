import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateProductDto {

	@ApiProperty({
		example: 'MacBook Pro 2021',
		required: true
	})
	@IsString()
	@IsNotEmpty()
	title: string

	@ApiProperty({
		example: 'The best laptop for developers',
		required: true
	})
	@IsString()
	description: string


	@ApiProperty({
		example: 1000,
		required: true
	})
	@IsInt()
	price: number


	@ApiProperty({
		example: true,
		required: true
	})
	@IsOptional()
	@IsBoolean()
	isActive: boolean
}


export class UpdateProductDto extends CreateProductDto {

	@ApiProperty({
		example: 1,
		required: true,
		type: Number,
		description: 'Product ID'
	})
	@IsInt()
	@IsNotEmpty()
	id: number
}
