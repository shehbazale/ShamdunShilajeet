// User Types
export interface User {
  id: string
  name: string
  email: string
  phone?: string
  role: 'user' | 'admin'
  avatar?: string
  createdAt: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
}

// Product Types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  weight: number // in grams
  images: string[]
  category: string
  inStock: boolean
  stock: number
  rating: number
  reviewCount: number
  labTestUrl?: string
  howToUse?: string
  benefits?: string[]
  createdAt: string
}

export interface CartItem {
  product: Product
  quantity: number
  selectedWeight: number
}

// Order Types
export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  subtotal: number
  tax: number
  shipping: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentMethod: 'cod' | 'stripe'
  paymentStatus: 'pending' | 'paid' | 'failed'
  shippingAddress: Address
  createdAt: string
  updatedAt: string
}

export interface Address {
  id?: string
  fullName: string
  phone: string
  address: string
  city: string
  province: string
  postalCode: string
  country: string
  isDefault?: boolean
}

// Review Types
export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  createdAt: string
}

// Filter Types
export interface ProductFilters {
  minPrice?: number
  maxPrice?: number
  weight?: number[]
  inStock?: boolean
  search?: string
  sortBy?: 'price-asc' | 'price-desc' | 'popularity' | 'newest'
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

