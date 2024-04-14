import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateProductDto {
	/**
	 * The name of the product
	 * @example MacBook Pro M3
	 */
	@ApiProperty({ description: 'The name of the product' })
	@IsNotEmpty()
	@IsString()
	name: string

	/**
	 * The description of the product
	 * @example Apple MacBook Pro con barra táctil, Intel Core i5, 13 pulgadas, 8 GB de RAM, 256 GB de espacio de almacenamiento, gris (renovada)
	 */
	@ApiProperty({ description: 'The description of the product' })
	@IsNotEmpty()
	@IsString()
	description: string

	/**
	 * The height in cm of the product
	 * @example 25.3
	 */
	@ApiProperty({ description: 'The height of the product' })
	@IsNotEmpty()
	@IsNumber({
		allowInfinity: false,
		allowNaN: false,
		maxDecimalPlaces: 2,
	})
	height: number

	/**
	 * The length in cm of the product
	 * @example 78.3
	 */
	@ApiProperty({ description: 'The length of the product' })
	@IsNotEmpty()
	@IsNumber({
		allowInfinity: false,
		allowNaN: false,
		maxDecimalPlaces: 2,
	})
	length: number

	/**
	 * The width in cm of the product
	 * @example 10.5
	 */
	@ApiProperty({ description: 'The width of the product' })
	@IsNotEmpty()
	@IsNumber({
		allowInfinity: false,
		allowNaN: false,
		maxDecimalPlaces: 2,
	})
	width: number
}
