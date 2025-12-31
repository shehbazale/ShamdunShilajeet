import { lazy } from 'react'
import type { ComponentType } from 'react'

// Lazy load pages for code splitting
const Home = lazy(() => import('../pages/Home'))
const Shop = lazy(() => import('../pages/Shop'))
const ProductDetail = lazy(() => import('../pages/ProductDetail'))
const Cart = lazy(() => import('../pages/Cart'))
const Checkout = lazy(() => import('../pages/Checkout'))
const Login = lazy(() => import('../pages/auth/Login'))
const Register = lazy(() => import('../pages/auth/Register'))
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'))
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'))
const Dashboard = lazy(() => import('../pages/user/Dashboard'))
const Orders = lazy(() => import('../pages/user/Orders'))
const Profile = lazy(() => import('../pages/user/Profile'))
const AdminDashboard = lazy(() => import('../pages/admin/Dashboard'))
const AdminProducts = lazy(() => import('../pages/admin/Products'))
const AdminOrders = lazy(() => import('../pages/admin/Orders'))
const AdminUsers = lazy(() => import('../pages/admin/Users'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('../pages/TermsConditions'))
const RefundPolicy = lazy(() => import('../pages/RefundPolicy'))
const Disclaimer = lazy(() => import('../pages/Disclaimer'))

export interface RouteConfig {
  path: string
  component: ComponentType
  protected?: boolean
  adminOnly?: boolean
}

export const routes: RouteConfig[] = [
  // Public routes
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/product/:id', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/terms-conditions', component: TermsConditions },
  { path: '/refund-policy', component: RefundPolicy },
  { path: '/disclaimer', component: Disclaimer },
  
  // Auth routes
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/reset-password/:token', component: ResetPassword },
  
  // Protected user routes
  { path: '/checkout', component: Checkout, protected: true },
  { path: '/dashboard', component: Dashboard, protected: true },
  { path: '/orders', component: Orders, protected: true },
  { path: '/profile', component: Profile, protected: true },
  
  // Admin routes
  { path: '/admin', component: AdminDashboard, protected: true, adminOnly: true },
  { path: '/admin/products', component: AdminProducts, protected: true, adminOnly: true },
  { path: '/admin/orders', component: AdminOrders, protected: true, adminOnly: true },
  { path: '/admin/users', component: AdminUsers, protected: true, adminOnly: true },
]

