import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem, Product } from '../../types'

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  total: 0,
  itemCount: 0,
}

const calculateTotals = (items: CartItem[]) => {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  return { total, itemCount }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    ...initialState,
    ...calculateTotals(initialState.items),
  },
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number; weight: number }>) => {
      const { product, quantity, weight } = action.payload
      const existingItem = state.items.find(
        (item) => item.product.id === product.id && item.selectedWeight === weight
      )

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ product, quantity, selectedWeight: weight })
      }

      const totals = calculateTotals(state.items)
      state.total = totals.total
      state.itemCount = totals.itemCount
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.product.id !== action.payload)
      const totals = calculateTotals(state.items)
      state.total = totals.total
      state.itemCount = totals.itemCount
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload
      const item = state.items.find((item) => item.product.id === productId)
      if (item) {
        item.quantity = quantity
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.product.id !== productId)
        }
      }
      const totals = calculateTotals(state.items)
      state.total = totals.total
      state.itemCount = totals.itemCount
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
      state.itemCount = 0
      localStorage.removeItem('cart')
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer

