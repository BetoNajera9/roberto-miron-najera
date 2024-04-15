export interface DimensionsInterface {
	/**
	 * The length of the package
	 * @example 38
	 */
	length: number

	/**
	 * The width of the package
	 * @example 34
	 */
	width: number

	/**
	 * The height of the package
	 * @example 12.54
	 */
	height: number
}

export interface PackageInterface {
	/**
	 * The name of the package
	 * @example Arizona
	 */
	content: string

	/**
	 * The boxCode of the package
	 * @example e34sd
	 */
	boxCode?: string

	/**
	 * The amount of the package
	 * @example 2
	 */
	amount: number

	/**
	 * The type of the package
	 * @example box
	 */
	type: string

	/**
	 * The weight of the package
	 * @example 2
	 */
	weight: number

	/**
	 * The insurance of the package
	 * @example 0
	 */
	insurance: number

	/**
	 * The declaredValue of the package
	 * @example 0
	 */
	declaredValue: number

	/**
	 * The weightUnit of the package
	 * @example KG
	 */
	weightUnit: string

	/**
	 * The lengthUnit of the package
	 * @example CM
	 */
	lengthUnit: string

	/**
	 * The dimensions of the package
	 * @example DimensionsDto
	 */
	dimensions: DimensionsInterface
}
