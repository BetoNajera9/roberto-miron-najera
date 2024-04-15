import { CreateAccessTokenDto } from '@access-token/dto'

export interface AccessTokenInterface extends CreateAccessTokenDto {
	/**
	 * Id is the identifier
	 * @example 9517caf3-dcda-481a-b019-fcbb49b7efe4
	 */
	id: string

	/**
	 * This is the timestamp at which the user was created.
	 * @example 2024-04-03 17:20:38.275074
	 */
	createdAt: Date

	/**
	 * This is the timestamp at which the user was created.
	 * @example 2024-04-03 17:20:38.275074
	 */
	updatedAt: Date
}
