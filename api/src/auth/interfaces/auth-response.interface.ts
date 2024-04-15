import { UserDto } from '@user/dto'

export interface AuthResponseInterface {
	/**
	 * JsonWebToken
	 * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQ2xhdWR...
	 */
	accessToken: string

	/**
	 * The user model
	 * @example UserModel
	 */
	user: UserDto
}
