import axios, { AxiosInstance } from 'axios'

import {
  ResponseShipmentsInterface,
  ResponseServiceInterface,
  CreateShipmentInterface,
  ResponseAuthInterface,
  ProductInterface,
} from './interfaces'

export default class Service {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
      headers: {},
    })
  }

  async getProducts(page: number, take?: number): Promise<ResponseServiceInterface<ProductInterface[]>> {
    let query = `/product?page=${page}`
    if (take)
      query = `/product?page=${page}&take=${take}`

    const { data } = await this.client.get<ResponseServiceInterface<ProductInterface[]>>(query)

    return data
  }

  async getProduct(id: string): Promise<ResponseServiceInterface<ProductInterface>> {
    const { data } = await this.client.get<ResponseServiceInterface<ProductInterface>>(`/product/${id}`)

    return data
  }

  async login(email: string, password: string): Promise<ResponseServiceInterface<ResponseAuthInterface>> {
    const { data } = await this.client.post<ResponseServiceInterface<ResponseAuthInterface>>(`/auth/login`, {
      email,
      password
    })

    return data
  }

  async budget(shipmentData: CreateShipmentInterface, token: string): Promise<ResponseServiceInterface<ResponseShipmentsInterface>> {
    const { data } = await this.client.post<ResponseServiceInterface<ResponseShipmentsInterface>>(`/shipment/budget`, shipmentData, {
      headers: {
        Authorization: `Beaarer ${token}`
      }
    })

    return data
  }

  async guide(shipmentData: CreateShipmentInterface, token: string): Promise<ResponseServiceInterface<string>> {
    const { data } = await this.client.post<ResponseServiceInterface<string>>(`/shipment/guide`, shipmentData, {
      headers: {
        Authorization: `Beaarer ${token}`
      }
    })

    return data
  }
}