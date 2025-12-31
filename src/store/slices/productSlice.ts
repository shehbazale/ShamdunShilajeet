import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductFilters, PaginatedResponse } from '../../types'
import api from '../../utils/api'

interface ProductState {
  products: Product[]
  featuredProducts: Product[]
  currentProduct: Product | null
  filters: ProductFilters
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  isLoading: boolean
  error: string | null
}

const initialState: ProductState = {
  products: [],
  featuredProducts: [],
  currentProduct: null,
  filters: {},
  pagination: {
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
  },
  isLoading: false,
  error: null,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters: ProductFilters = {}) => {
    const response = await api.get<PaginatedResponse<Product>>('/products', { params: filters })
    return response.data
  }
)

export const fetchFeaturedProducts = createAsyncThunk('products/fetchFeatured', async () => {
  const response = await api.get<Product[]>('/products/featured')
  return response.data
})

export const fetchProductById = createAsyncThunk('products/fetchById', async (id: string) => {
  const response = await api.get<Product>(`/products/${id}`)
  return response.data
})

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<ProductFilters>) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    clearFilters: (state) => {
      state.filters = {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload.data
        state.pagination = {
          page: action.payload.page,
          limit: action.payload.limit,
          total: action.payload.total,
          totalPages: action.payload.totalPages,
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Failed to fetch products'
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.featuredProducts = action.payload
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload
      })
  },
})

export const { setFilters, clearFilters } = productSlice.actions
export default productSlice.reducer

