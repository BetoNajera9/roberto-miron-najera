export interface FindAccessTokenInterface {
	/**
	 * Id is the identifier
	 * @example 9517caf3-dcda-481a-b019-fcbb49b7efe4
	 */
	id?: string

	/**
	 * Id is the identifier of the user
	 * @example 9517caf3-dcda-481a-b019-fcbb49b7efe4
	 */
	userId?: string

	/**
	 * JsonWebToken
	 * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQ2xhdWR...
	 */
	token?: string
}
