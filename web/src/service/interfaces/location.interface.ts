export interface CoordinatesInterface {
	/**
	 * The latitude of the location
	 * @example -49.0033
	 */
	latitude: string

	/**
	 * The longitude of the location
	 * @example 101.8530
	 */
	longitude: string
}

export interface LocationInterface {
	/**
	 * The name of the person at the location
	 * @example Ben
	 */
	name: string

	/**
	 * The name of the company of the location
	 * @example Google
	 */
	company: string

	/**
	 * The email of the person at the location
	 * @example example@email.com
	 */
	email: string

	/**
	 * The phone of the company of the location
	 * @example +525548328860
	 */
	phone: string

	/**
	 * The street of the location
	 * @example Gutmann Heights
	 */
	street: string

	/**
	 * The number of the location
	 * @example 11
	 */
	number: string

	/**
	 * The district of the location
	 * @example Carroll Harbor
	 */
	district?: string

	/**
	 * The city of the location
	 * @example Schadenside
	 */
	city: string

	/**
	 * The state of the location
	 * @example South Dakota
	 */
	state: string

	/**
	 * The category of the location
	 * @example 1
	 */
	category: number

	/**
	 * The country of the location
	 * @example MX
	 */
	country: string

	/**
	 * The postalCode of the location
	 * @example MX
	 */
	postalCode: string

	/**
	 * The reference of the location
	 * @example MX
	 */
	reference?: string

	/**
	 * The coordinates of the location
	 * @example CoordinatesDto
	 */
	coordinates?: CoordinatesInterface
}
