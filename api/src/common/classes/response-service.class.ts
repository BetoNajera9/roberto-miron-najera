import { ResponseInterface } from '@common/interfaces'
import { PageMetaDto } from '@common/dto'

export class ResponseService {
	private serviceResponse: Record<string, any>

	constructor(responses?: Record<string, any>) {
		this.serviceResponse = responses || {}
	}

	/**
	 * Function to generate and return a response
	 * @param {boolean}success A boolean representing the status of response
	 * @param {string}messageResponse A string representing the response text
	 * @param {any}data All the data to return
	 * @param {PageMetaDto}meta Pagination data
	 * @returns An object of type StatusResponse
	 */
	handlerResponse(
		success: boolean,
		messageResponse: string,
		data?: any,
		meta?: PageMetaDto
	): ResponseInterface {
		const index = Object.values(this.serviceResponse).indexOf(messageResponse)
		const code = Object.keys(this.serviceResponse)[index]

		return !code
			? {
					success,
					statusCode: 'UNDEFINED_RESPONSE',
					message: messageResponse,
					data,
					meta,
				}
			: {
					success,
					statusCode: code,
					message: messageResponse,
					data,
					meta,
				}
	}
}
