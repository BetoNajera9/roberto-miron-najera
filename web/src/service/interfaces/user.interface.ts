export interface UserInterface {
  /**
   * Id is the identifier
   * @example 9517caf3-dcda-481a-b019-fcbb49b7efe4
   */
  id: string

  /**
   * The name of the user
   * @example Brad
   */
  name: string

  /**
   * The email of the user
   * @example example@email.com
   */
  email: string

  /**
   * The password of the user
   * @example 1q2w3e4r
   */
  password: string

  /**
   * The phone number of the user
   * @example +525548328860
   */
  phone: string

  /**
   * The url of the user's profile image
   * @example http://s3.aws.com/image.png
   */
  imgProfile?: string

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
