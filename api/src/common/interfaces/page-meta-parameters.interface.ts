import { PageOptionsDto } from '@common/dto'

export interface PageMetaParamInterface {
	/**
	 * Page options
	 * @example PageOptionsDto
	 */
	pageOptionsDto: PageOptionsDto

	/**
	 * ItemCount
	 * @example 10
	 */
	itemCount: number
}
