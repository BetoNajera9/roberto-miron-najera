import { Inject, Injectable } from '@nestjs/common'
import * as Jwt from 'jsonwebtoken'

import { DbService } from '@db/db.service'

import { CreateAccessTokenDto, UpdateAccessTokenDto } from './dto'
import {
	AccessTokenInterface,
	AccessTokenVerifyInterface,
	FindAccessTokenInterface,
} from './interfaces'

@Injectable()
export class AccessTokenService {
	constructor(@Inject(DbService) private dbService: DbService) {}
	async create(data: CreateAccessTokenDto) {
		return await this.dbService.accessToken.create({ data })
	}
	/**
	 * This function find all accessTokens in db
	 * @returns Promise
	 */
	async findAll(): Promise<AccessTokenInterface[]> {
		return await this.dbService.accessToken.findMany()
	}

	/**
	 * This function find one accessToken in db
	 * @param  {FindAccessTokenInterface} query
	 * @returns Promise
	 */
	async findOne(
		query: FindAccessTokenInterface
	): Promise<AccessTokenInterface> {
		return await this.dbService.accessToken.findFirst({
			where: query,
		})
	}

	/**
	 * This function update accessToken in db
	 * @param  {FindAccessTokenInterface} query
	 * @param  {UpdateAccessTokenDto} data
	 * @returns Promise
	 */
	async update(
		query: FindAccessTokenInterface,
		data: UpdateAccessTokenDto
	): Promise<AccessTokenInterface> {
		const accessTokenData = await this.findOne(query)

		return await this.dbService.accessToken.update({
			where: { id: accessTokenData.id },
			data,
		})
	}

	/**
	 * This function remove accessToken in db
	 * @param  {FindAccessTokenInterface} query
	 * @returns Promise
	 */
	async remove(query: FindAccessTokenInterface): Promise<AccessTokenInterface> {
		const accessTokenData = await this.findOne(query)

		return await this.dbService.accessToken.delete({
			where: { id: accessTokenData.id },
		})
	}

	/**
	 * This function checks for expiration of the accessToken
	 * @param  {string} token The token to verify
	 * @returns Promise<AccessTokenVerifyInterface>
	 */
	public async verifyToken(token: string): Promise<AccessTokenVerifyInterface> {
		const tokenData = await this.findOne({ token })

		if (!tokenData) return null

		if (!Jwt.decode(token)) return null

		const currentDate = new Date()
		const tokenVerify: AccessTokenVerifyInterface = {
			...tokenData,
			isExpired: +tokenData.expiredAt <= +currentDate / 1000,
		}

		return tokenVerify
	}
}
