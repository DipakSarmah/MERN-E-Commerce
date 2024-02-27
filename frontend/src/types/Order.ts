import { CartItem, ShippingAddress } from './Cart'
import { User } from './User'

export type Order = {
  _id: string
  orderItems: CartItem[]
  shippingAddress: ShippingAddress
  paymentMethod: string
  user: User
  createAt: string
  isPaid: boolean
  paidAt: string
  isDeliverd: string
  deliveredAt: string
  itemsPrice: number
  shippingPrice: number
  taxPrice: number
  totalPrice: number
}
