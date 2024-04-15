import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { IsObjectIdPipe } from 'nestjs-object-id'
import { PageOptionsDto } from '@common/dto'
import {
	Controller,
	Delete,
	Param,
	Query,
	Patch,
	Body,
	Post,
	Get,
} from '@nestjs/common'

import { ResponseInterface } from '@common/interfaces'
import { ResponseService } from '@common/classes'

import { CreateProductDto, UpdateProductDto } from './dto'
import { ProductService } from './product.service'
import { ProductResponseEnum } from './enums'

@Controller('product')
@ApiTags('Product')
export class ProductController {
	private responseService: ResponseService

	constructor(private readonly productService: ProductService) {
		this.responseService = new ResponseService(ProductResponseEnum)
	}

	@Post()
	@ApiOperation({
		description: 'This endpoint creates the registration of a new product.',
		summary: 'Create product',
	})
	async create(
		@Body() createProductDto: CreateProductDto
	): Promise<ResponseInterface> {
		const product = await this.productService.create(createProductDto)

		return this.responseService.handlerResponse(
			true,
			ProductResponseEnum.CREATE,
			product
		)
	}

	@Get()
	@ApiOperation({
		description: 'This endpoint obtains all registered products in database.',
		summary: 'Get all the products',
	})
	async findAll(
		@Query() pageOptions: PageOptionsDto
	): Promise<ResponseInterface> {
		const { data, meta } = await this.productService.findAll(pageOptions)

		return this.responseService.handlerResponse(
			true,
			ProductResponseEnum.SEARCH,
			data,
			meta
		)
	}

	@Get(':id')
	@ApiOperation({
		description:
			'This endpoint obtains the product with id from the identifier of the parameter.',
		summary: 'Get a product by id',
	})
	async findOne(
		@Param('id', IsObjectIdPipe) id: string
	): Promise<ResponseInterface> {
		const product = await this.productService.findOne(id)

		return this.responseService.handlerResponse(
			true,
			ProductResponseEnum.SEARCH,
			product
		)
	}

	@Patch(':id')
	@ApiOperation({
		description: 'This endpoint updates product data',
		summary: 'Update product',
	})
	async update(
		@Param('id', IsObjectIdPipe) id: string,
		@Body() updateProductDto: UpdateProductDto
	): Promise<ResponseInterface> {
		const product = await this.productService.update(id, updateProductDto)

		return this.responseService.handlerResponse(
			true,
			ProductResponseEnum.UPDATE,
			product
		)
	}

	@Delete(':id')
	@ApiOperation({
		description:
			'This endpoint removes the product with the identifier of the parameter.',
		summary: 'Delete product',
	})
	async remove(
		@Param('id', IsObjectIdPipe) id: string
	): Promise<ResponseInterface> {
		const product = await this.productService.remove(id)

		return this.responseService.handlerResponse(
			true,
			ProductResponseEnum.REMOVE,
			product
		)
	}
}
