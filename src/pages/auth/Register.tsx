import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { register } from '../../store/slices/authSlice'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import toast from 'react-hot-toast'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.string().regex(/^[0-9]{10,12}$/, 'Invalid phone number (10-12 digits)').optional()
  ),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

type RegisterFormData = z.infer<typeof registerSchema>

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.auth)

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
  })

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const result = await dispatch(register({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone || undefined,
      })).unwrap()
      toast.success('Registration successful!')
      
      // Navigate based on user role (though new registrations are typically regular users)
      if (result.user?.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    } catch (error: any) {
      toast.error(error.message || 'Registration failed. Please try again.')
    }
  }

  return (
    <>
      <Helmet>
        <title>Register - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen flex items-center">
        <div className="container-custom max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2 text-center">Create Account</h1>
            <p className="text-gray-600 text-center mb-6">Sign up to start shopping</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <Input
                label="Full Name"
                {...registerField('name')}
                error={errors.name?.message}
                placeholder="John Doe"
              />
              <Input
                label="Email"
                type="email"
                {...registerField('email')}
                error={errors.email?.message}
                placeholder="your@email.com"
              />
              <Input
                label="Phone (Optional)"
                type="tel"
                {...registerField('phone')}
                error={errors.phone?.message}
                placeholder="03001234567"
              />
              <Input
                label="Password"
                type="password"
                {...registerField('password')}
                error={errors.password?.message}
                placeholder="••••••••"
              />
              <Input
                label="Confirm Password"
                type="password"
                {...registerField('confirmPassword')}
                error={errors.confirmPassword?.message}
                placeholder="••••••••"
              />

              <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
                Register
              </Button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-700 hover:text-primary-800 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

