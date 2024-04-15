import { IsOptional, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'

import { LocationDto } from './location.dto'
import { PackageDto } from './package.dto'

export class CreateShipmentDto {
	/**
	 * The address where the package is to be sent to
	 * @example LocationDto
	 */
	@ApiProperty({
		description: 'The address where the package is to be sent to',
	})
	@Type(() => LocationDto)
	@ValidateNested()
	@IsOptional()
	destination: LocationDto

	/**
	 * Package features
	 * @example PackageDto[]
	 */
	@ApiProperty({ description: 'Package features' })
	@Type(() => PackageDto)
	@ValidateNested()
	@IsOptional()
	packages: PackageDto[]
}
