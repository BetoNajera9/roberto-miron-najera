export interface ProductInterface {
  /**
   * Id is the identifier
   * @example 9517caf3-dcda-481a-b019-fcbb49b7efe4
   */
  id: string

  /**
   * The name of the product
   * @example MacBook Pro M3
   */
  name: string

  /**
   * The description of the product
   * @example Apple MacBook Pro con barra táctil, Intel Core i5, 13 pulgadas, 8 GB de RAM, 256 GB de espacio de almacenamiento, gris (renovada)
   */
  description: string

  /**
   * The height in cm of the product
   * @example 25.3
   */
  height: number

  /**
   * The length in cm of the product
   * @example 78.3
   */
  length: number

  /**
   * The width in cm of the product
   * @example 10.5
   */
  width: number

  /**
   * This is the timestamp at which the user was created.
   * @example 2024-04-03 17:20:38.275074
   */
  createdAt: Date

  /**
   * This is the timestamp at which the user was created.
   * @example 2024-04-03 17:20:38.275074
   */
  updatedAt: Date
}
