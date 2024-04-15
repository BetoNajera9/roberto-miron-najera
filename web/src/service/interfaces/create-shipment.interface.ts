import { LocationInterface } from './location.interface'
import { PackageInterface } from './package.interface'

export interface CreateShipmentInterface {
	/**
	 * The address where the package is to be sent to
	 * @example LocationDto
	 */
	destination: LocationInterface

	/**
	 * Package features
	 * @example PackageDto[]
	 */
	packages: PackageInterface[]
}
