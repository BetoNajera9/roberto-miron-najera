import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
	ValidateNested,
	IsNotEmpty,
	IsOptional,
	IsNumber,
	IsString,
} from 'class-validator'

export class DimensionsDto {
	/**
	 * The length of the package
	 * @example 38
	 */
	@ApiProperty({ description: 'The length of the package' })
	@IsNotEmpty()
	@IsNumber()
	length: number

	/**
	 * The width of the package
	 * @example 34
	 */
	@ApiProperty({ description: 'The width of the package' })
	@IsNotEmpty()
	@IsNumber()
	width: number

	/**
	 * The height of the package
	 * @example 12.54
	 */
	@ApiProperty({ description: 'The height of the package' })
	@IsNotEmpty()
	@IsNumber()
	height: number
}

export class PackageDto {
	/**
	 * The name of the package
	 * @example Arizona
	 */
	@ApiProperty({ description: 'The name of the package' })
	@IsNotEmpty()
	@IsString()
	content: string

	/**
	 * The boxCode of the package
	 * @example e34sd
	 */
	@ApiProperty({ description: 'The boxCode of the package' })
	@IsOptional()
	@IsString()
	boxCode?: string

	/**
	 * The amount of the package
	 * @example 2
	 */
	@ApiProperty({ description: 'The amount of the package' })
	@IsNotEmpty()
	@IsNumber()
	amount: number

	/**
	 * The type of the package
	 * @example box
	 */
	@ApiProperty({ description: 'The type of the package' })
	@IsNotEmpty()
	@IsString()
	type: string

	/**
	 * The weight of the package
	 * @example 2
	 */
	@ApiProperty({ description: 'The weight of the package' })
	@IsNotEmpty()
	@IsNumber()
	weight: number

	/**
	 * The insurance of the package
	 * @example 0
	 */
	@ApiProperty({ description: 'The insurance of the package' })
	@IsNotEmpty()
	@IsNumber()
	insurance: number

	/**
	 * The declaredValue of the package
	 * @example 0
	 */
	@ApiProperty({ description: 'The declaredValue of the package' })
	@IsNotEmpty()
	@IsNumber()
	declaredValue: number

	/**
	 * The weightUnit of the package
	 * @example KG
	 */
	@ApiProperty({ description: 'The weightUnit of the package' })
	@IsNotEmpty()
	@IsString()
	weightUnit: string

	/**
	 * The lengthUnit of the package
	 * @example CM
	 */
	@ApiProperty({ description: 'The lengthUnit of the package' })
	@IsNotEmpty()
	@IsString()
	lengthUnit: string

	/**
	 * The dimensions of the package
	 * @example DimensionsDto
	 */
	@ApiProperty({ description: 'The dimensions of the package' })
	@Type(() => DimensionsDto)
	@ValidateNested()
	@IsOptional()
	dimensions: DimensionsDto
}
