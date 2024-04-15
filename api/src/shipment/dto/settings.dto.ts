import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class SettingsDto {
	/**
	 * The printFormat of the guide
	 * @example PDF
	 */
	@ApiProperty({ description: 'The printFormat of the guide' })
	@IsNotEmpty()
	@IsString()
	printFormat: string

	/**
	 * The printSize of the guide
	 * @example STOCK_4X6
	 */
	@ApiProperty({ description: 'The printSize of the guide' })
	@IsNotEmpty()
	@IsString()
	printSize: string

	/**
	 * The currency of the package
	 * @example PDF
	 */
	@ApiProperty({ description: 'The currency of the package' })
	@IsNotEmpty()
	@IsString()
	currency: string

	/**
	 * The cashOnDelivery of the package
	 * @example 1000.00
	 */
	@ApiProperty({ description: 'The cashOnDelivery of the package' })
	@IsNotEmpty()
	@IsString()
	cashOnDelivery: string

	/**
	 * The comments of the package
	 * @example PDF
	 */
	@ApiProperty({ description: 'The comments of the package' })
	@IsOptional()
	@IsString()
	comments?: string
}
