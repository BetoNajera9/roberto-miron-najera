export interface PageMetaInterface {
	/**
	 * Get the page
	 * @example 1
	 */
	readonly page: number

	/**
	 * Get the take
	 * @example 10
	 */
	readonly take: number

	/**
	 * Get the item count
	 * @example 1
	 */
	readonly itemCount: number

	/**
	 * Get the page
	 * @example 2
	 */
	readonly pageCount: number

	/**
	 * Know if you have a previous page
	 * @example false
	 */
	readonly hasPreviousPage: boolean

	/**
	 * Know if you have a next page
	 * @example true
	 */
	readonly hasNextPage: boolean
}
