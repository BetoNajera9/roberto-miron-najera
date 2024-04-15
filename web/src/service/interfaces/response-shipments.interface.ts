export interface DeliveryDateInterface {
	date: string
	dateDifference: number
	timeUnit: string
	time: string
}

export interface CostSummaryInterface {
	quantity: number
	basePrice: number
	extendedFare: number
	insurance: number
	additionalServices: number
	costAdditionalServices: any[]
	additionalCharges: number
	costAdditionalCharges: any[]
	totalPrice: number
	currency: string
	customKey: boolean
	cashOnDeliveryCommission: number
	cashOnDeliveryAmount: number
	customKeyCommission: number
	smsCommission: number
	securityDeposit: boolean
	securityWeight: number
	importFee: number
	taxes: number
	whatsappCommission: number
	folio: any
}

export interface ShipmentsDataInterface {
	carrier: string
	carrierDescription: string
	carrierId: number
	serviceId: number
	service: string
	serviceDescription: string
	dropOff: number
	zone: number
	deliveryEstimate: string
	deliveryDate: DeliveryDateInterface
	quantity: number
	basePrice: number
	extendedFare: number
	insurance: number
	additionalServices: number
	additionalCharges: number
	totalPrice: number
	currency: string
	customKey: boolean
	importFee: number
	taxes: number
	cashOnDeliveryCommission: number
	cashOnDeliveryAmount: number
	customKeyCost: number
	smsCost: number
	whatsappCost: number
	branches: any[]
	costSummary: CostSummaryInterface[]
}

export interface ResponseShipmentsInterface {
	meta: string
	data: ShipmentsDataInterface[]
}
