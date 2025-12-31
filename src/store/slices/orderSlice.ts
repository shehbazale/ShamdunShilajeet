import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Order } from '../../types'
import api from '../../utils/api'

interface OrderState {
  orders: Order[]
  currentOrder: Order | null
  isLoading: boolean
  error: string | null
}

const initialState: OrderState = {
  orders: [],
  currentOrder: null,
  isLoading: false,
  error: null,
}

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await api.get<Order[]>('/orders')
  return response.data
})

export const createOrder = createAsyncThunk('orders/create', async (orderData: any) => {
  const response = await api.post<Order>('/orders', orderData)
  return response.data
})

export const fetchOrderById = createAsyncThunk('orders/fetchById', async (id: string) => {
  const response = await api.get<Order>(`/orders/${id}`)
  return response.data
})

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false
        state.orders = action.payload
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orders.unshift(action.payload)
        state.currentOrder = action.payload
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.currentOrder = action.payload
      })
  },
})

export const { setCurrentOrder } = orderSlice.actions
export default orderSlice.reducer

