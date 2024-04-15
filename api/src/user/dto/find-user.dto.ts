import { ApiProperty } from '@nestjs/swagger'
import {
	ValidateIf,
	IsOptional,
	IsMongoId,
	IsString,
	IsEmail,
} from 'class-validator'

export class FindUserDto {
	/**
	 * Id is the schema identifier
	 * @example 9517caf3-dcda-481a-b019-fcbb49b7efe4
	 */
	@ApiProperty({ description: 'The id of the user schema' })
	@ValidateIf((dto) => typeof dto.name === 'undefined')
	@IsOptional()
	@IsMongoId()
	@IsString()
	id?: string

	/**
	 * The email of the user
	 * @example example@email.com
	 */
	@ApiProperty({ description: 'The email of the user account' })
	@IsOptional()
	@IsString()
	@IsEmail()
	email?: string
}
