import { ApiProperty } from '@nestjs/swagger'
import {
	IsPhoneNumber,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsEmail,
	IsUrl,
} from 'class-validator'

export class CreateUserDto {
	/**
	 * The name of the user
	 * @example Brad
	 */
	@ApiProperty({ description: 'The name of the user' })
	@IsNotEmpty()
	@IsString()
	name: string

	/**
	 * The email of the user
	 * @example example@email.com
	 */
	@ApiProperty({ description: 'The email of the user account' })
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string

	/**
	 * The password of the user
	 * @example 1q2w3e4r
	 */
	@ApiProperty({ description: 'The password of the user account' })
	@IsNotEmpty()
	@IsString()
	password: string

	/**
	 * The phone number of the user
	 * @example +525548328860
	 */
	@ApiProperty({ description: 'The phone number of the user' })
	@IsPhoneNumber()
	@IsNotEmpty()
	@IsString()
	phone: string

	/**
	 * The url of the user's profile image
	 * @example http://s3.aws.com/image.png
	 */
	@ApiProperty({
		description: "The url of the user's profile image",
	})
	@IsOptional()
	@IsString()
	@IsUrl()
	imgProfile?: string
}
