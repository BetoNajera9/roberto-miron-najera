import { defineStore, Store } from 'pinia'

import Service from '../service'
import {
  ResponseShipmentsInterface,
  LocationInterface,
  PackageInterface,
  ProductInterface,
  UserInterface
} from '../service/interfaces'

export const apiStore = defineStore('api', {
  state: () => ({
    budget: {} as ResponseShipmentsInterface,
    products: [] as ProductInterface[],
    address: {} as LocationInterface,
    product: {} as ProductInterface,
    user: {} as UserInterface,
    token: '',
    guide: ''
  }),
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getAddress: (state) => state.address,
    getToken: (state) => state.token,
    getuser: (state) => state.user,
  },
  actions: {
    async setProducts(page: number, take?: number) {
      try {
        const service = new Service()
        const products = await service.getProducts(page, take)

        if (products.success)
          this.products = products.data || [] as ProductInterface[]
      } catch (error) {
        console.error(error)
      }
    },

    async setProduct(id: string) {
      try {
        const service = new Service()
        const product = await service.getProduct(id)

        if (product.success)
          this.product = product.data || {} as ProductInterface
      } catch (error) {
        console.error(error)
      }
    },

    async setLogin(email: string, password: string) {
      try {
        const service = new Service()
        const loginData = await service.login(email, password)

        if (loginData.success) {
          this.user = loginData.data?.user || {} as UserInterface
          this.token = loginData.data?.accessToken || ''
        }
      } catch (error) {
        console.error(error)
      }
    },

    async setAddress(address: LocationInterface) {
      this.address = address
    },

    //TODO: Add weight to product schema
    async setBudget(product: ProductInterface) {
      try {
        const service = new Service()
        const products: PackageInterface[] = [{
          content: product.name,
          amount: 1,
          type: 'box',
          weight: 2,
          insurance: 0,
          declaredValue: 0,
          weightUnit: 'KG',
          lengthUnit: 'CM',
          dimensions: {
            length: product.length,
            width: product.width,
            height: product.height
          }
        }]


        const budgetData = await service.budget({
          destination: this.address,
          packages: products
        },
          this.token
        )

        if (budgetData.success)
          this.budget = budgetData.data || {} as ResponseShipmentsInterface
      } catch (error) {
        console.error(error)
      }
    },

    async setGuide() {
      try {
        const service = new Service()
        const product: PackageInterface[] = [{
          content: this.product.name,
          amount: 1,
          type: 'box',
          weight: 2,
          insurance: 0,
          declaredValue: 0,
          weightUnit: 'KG',
          lengthUnit: 'CM',
          dimensions: {
            length: this.product.length,
            width: this.product.width,
            height: this.product.height
          }
        }]


        const budgetData = await service.guide({
          destination: this.address,
          packages: product
        },
          this.token
        )

        if (budgetData.success)
          this.guide = budgetData.data || ''
      } catch (error) {
        console.error(error)
      }
    }
  }
})