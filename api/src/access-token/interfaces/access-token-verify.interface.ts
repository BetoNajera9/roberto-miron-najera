import { AccessTokenInterface } from './access-token.interface'

export interface AccessTokenVerifyInterface extends AccessTokenInterface {
	/**
	 * Verify if the token is expired
	 * @example true
	 */
	isExpired: boolean
}
