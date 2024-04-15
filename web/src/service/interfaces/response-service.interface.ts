import { PageMetaInterface } from './page-meta.interface'

export interface ResponseServiceInterface<T> {
  /**
   * A boolean if the request succeeded
   * @example true
   */
  success: boolean

  /**
   * The code of the petition's status
   * @example CREATE
   */
  statusCode: string

  /**
   * The response message
   * @example The user was saved correctly.
   */
  message: string

  /**
   * The response data
   * @example Object
   */
  data?: T

  /**
   * The meta data about de data
   * @example PageMetaDto
   */
  meta?: PageMetaInterface
}
