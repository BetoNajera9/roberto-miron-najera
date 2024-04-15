import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
	ValidateNested,
	IsPhoneNumber,
	IsLongitude,
	IsNotEmpty,
	IsLatitude,
	IsOptional,
	IsNumber,
	IsString,
	IsEmail,
} from 'class-validator'

export class CoordinatesDto {
	/**
	 * The latitude of the location
	 * @example -49.0033
	 */
	@ApiProperty({ description: 'The latitude of the location' })
	@IsLatitude()
	@IsNotEmpty()
	latitude: string

	/**
	 * The longitude of the location
	 * @example 101.8530
	 */
	@ApiProperty({ description: 'The longitude of the location' })
	@IsLongitude()
	@IsNotEmpty()
	longitude: string
}

export class LocationDto {
	/**
	 * The name of the person at the location
	 * @example Ben
	 */
	@ApiProperty({ description: 'The name of the person at the location' })
	@IsNotEmpty()
	@IsString()
	name: string

	/**
	 * The name of the company of the location
	 * @example Google
	 */
	@ApiProperty({ description: 'The name of the company of the location' })
	@IsNotEmpty()
	@IsString()
	company: string

	/**
	 * The email of the person at the location
	 * @example example@email.com
	 */
	@ApiProperty({ description: 'The email of the person at the location' })
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string

	/**
	 * The phone of the company of the location
	 * @example +525548328860
	 */
	@ApiProperty({ description: 'The phone of the person of the location' })
	@IsPhoneNumber()
	@IsNotEmpty()
	@IsString()
	phone: string

	/**
	 * The street of the location
	 * @example Gutmann Heights
	 */
	@ApiProperty({ description: 'The street of the location' })
	@IsNotEmpty()
	@IsString()
	street: string

	/**
	 * The number of the location
	 * @example 11
	 */
	@ApiProperty({ description: 'The number of the location' })
	@IsNotEmpty()
	@IsString()
	number: string

	/**
	 * The district of the location
	 * @example Carroll Harbor
	 */
	@ApiProperty({ description: 'The district of the location' })
	@IsOptional()
	@IsString()
	district?: string

	/**
	 * The city of the location
	 * @example Schadenside
	 */
	@ApiProperty({ description: 'The city of the location' })
	@IsNotEmpty()
	@IsString()
	city: string

	/**
	 * The state of the location
	 * @example South Dakota
	 */
	@ApiProperty({ description: 'The state of the location' })
	@IsNotEmpty()
	@IsString()
	state: string

	/**
	 * The category of the location
	 * @example 1
	 */
	@ApiProperty({ description: 'The category of the location' })
	@IsNotEmpty()
	@IsNumber()
	category: number

	/**
	 * The country of the location
	 * @example MX
	 */
	@ApiProperty({ description: 'The country of the location' })
	@IsNotEmpty()
	@IsString()
	country: string

	/**
	 * The postalCode of the location
	 * @example MX
	 */
	@ApiProperty({ description: 'The postalCode of the location' })
	@IsNotEmpty()
	@IsString()
	postalCode: string

	/**
	 * The reference of the location
	 * @example MX
	 */
	@ApiProperty({ description: 'The reference of the location' })
	@IsOptional()
	@IsString()
	reference?: string

	/**
	 * The coordinates of the location
	 * @example CoordinatesDto
	 */
	@Type(() => CoordinatesDto)
	@ValidateNested()
	@IsOptional()
	coordinates?: CoordinatesDto
}
