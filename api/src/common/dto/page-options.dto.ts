import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'

import { PageOrderEnum } from '@common/enums'

export class PageOptionsDto {
	/**
	 * The order of the data
	 * @example asc
	 */
	@ApiPropertyOptional({ enum: PageOrderEnum, default: PageOrderEnum.ASC })
	@IsEnum(PageOrderEnum)
	@IsOptional()
	readonly order?: PageOrderEnum = PageOrderEnum.ASC

	/**
	 * Get the page
	 * @example 1
	 */
	@ApiPropertyOptional({
		minimum: 1,
		default: 1,
	})
	@Type(() => Number)
	@IsOptional()
	@IsInt()
	@Min(1)
	readonly page?: number = 1

	/**
	 * Get the take
	 * @example 10
	 */
	@ApiPropertyOptional({
		minimum: 1,
		maximum: 50,
		default: 10,
	})
	@Type(() => Number)
	@IsInt()
	@Min(1)
	@Max(50)
	@IsOptional()
	readonly take?: number = 10
}
