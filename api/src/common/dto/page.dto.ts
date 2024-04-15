import { ApiProperty } from '@nestjs/swagger'
import { IsArray } from 'class-validator'

import { PageMetaDto } from './page-meta.dto'

export class PageDto<T> {
	constructor(data: T[], meta: PageMetaDto) {
		this.data = data
		this.meta = meta
	}

	/**
	 * PageMetaDTO
	 * @example {}
	 */
	@IsArray()
	@ApiProperty({ isArray: true })
	readonly data: T[]

	/**
	 * Meta data
	 * @example PageMetaDTO
	 */
	@ApiProperty({ type: () => PageMetaDto })
	readonly meta: PageMetaDto
}
