import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { login } from '../../store/slices/authSlice'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import toast from 'react-hot-toast'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await dispatch(login(data)).unwrap()
      toast.success('Login successful!')
      
      // Navigate based on user role
      if (result.user?.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    } catch (error: any) {
      toast.error(error.message || 'Login failed. Please check your credentials.')
    }
  }

  return (
    <>
      <Helmet>
        <title>Login - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen flex items-center">
        <div className="container-custom max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2 text-center">Login</h1>
            <p className="text-gray-600 text-center mb-6">Welcome back! Please login to your account.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Email"
                type="email"
                {...register('email')}
                error={errors.email?.message}
                placeholder="your@email.com"
              />
              <Input
                label="Password"
                type="password"
                {...register('password')}
                error={errors.password?.message}
                placeholder="••••••••"
              />

              <div className="flex items-center justify-between">
                <Link to="/forgot-password" className="text-sm text-primary-700 hover:text-primary-800">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
                Login
              </Button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary-700 hover:text-primary-800 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

