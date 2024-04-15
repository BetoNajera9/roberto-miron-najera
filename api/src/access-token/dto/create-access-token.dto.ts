export class CreateAccessTokenDto {
	/**
	 * Id is the identifier of the user
	 * @example 9517caf3-dcda-481a-b019-fcbb49b7efe4
	 */
	userId: string

	/**
	 * JsonWebToken
	 * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQ2xhdWR...
	 */
	token: string

	/**
	 * This is the timestamp at which the user was created.
	 * @example 2024-04-03 17:20:38.275074
	 */
	expiredAt: Date
}
