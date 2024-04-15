import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CarrierDto {
	/**
	 * The name of the carrier
	 * @example Fedex
	 */
	@ApiProperty({ description: 'The name of the carrier' })
	@IsNotEmpty()
	@IsString()
	carrier: string

	/**
	 * The service of the carrier
	 * @example ground
	 */
	@ApiProperty({ description: 'The service of the carrier' })
	@IsNotEmpty()
	@IsString()
	service: string

	/**
	 * The type of the carrier
	 * @example ground
	 */
	@ApiProperty({ description: 'The type of the carrier' })
	@IsNotEmpty()
	@IsNumber()
	type: number
}
