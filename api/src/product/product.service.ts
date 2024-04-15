import { Inject, Injectable, NotFoundException } from '@nestjs/common'

import { PageOptionsDto, PageMetaDto, PageDto } from '@common/dto'
import { ErrorResponseEnum } from '@common/enums'
import { DbService } from '@db/db.service'

import { CreateProductDto, UpdateProductDto } from './dto'

@Injectable()
export class ProductService {
	constructor(@Inject(DbService) private dbService: DbService) {}

	async create(data: CreateProductDto): Promise<CreateProductDto> {
		return await this.dbService.catalogProducts.create({ data })
	}

	async findAll(
		pageOptions: PageOptionsDto
	): Promise<PageDto<CreateProductDto>> {
		const products = await this.dbService.catalogProducts.findMany({
			skip: (pageOptions.page - 1) * pageOptions.take,
			take: pageOptions.take,
			orderBy: {
				createdAt: pageOptions.order,
			},
		})

		if (!products.length)
			throw new NotFoundException(ErrorResponseEnum.NOT_FOUND)

		const count = await this.dbService.catalogProducts.count()

		const pageMetaDto = new PageMetaDto({
			itemCount: count,
			pageOptionsDto: pageOptions,
		})

		return new PageDto(products, pageMetaDto)
	}

	async findOne(id: string): Promise<CreateProductDto> {
		const product = await this.dbService.catalogProducts.findUnique({
			where: { id },
		})

		if (!product) throw new NotFoundException(ErrorResponseEnum.NOT_FOUND)

		return product
	}

	async update(id: string, data: UpdateProductDto): Promise<CreateProductDto> {
		await this.findOne(id)

		return await this.dbService.catalogProducts.update({
			where: { id },
			data,
		})
	}

	async remove(id: string): Promise<CreateProductDto> {
		await this.findOne(id)

		return await this.dbService.catalogProducts.delete({
			where: { id },
		})
	}
}
