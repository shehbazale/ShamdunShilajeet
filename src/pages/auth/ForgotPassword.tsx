import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import toast from 'react-hot-toast'
import api from '../../utils/api'

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await api.post('/auth/forgot-password', data)
      toast.success('Password reset link sent to your email!')
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to send reset link')
    }
  }

  return (
    <>
      <Helmet>
        <title>Forgot Password - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen flex items-center">
        <div className="container-custom max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2 text-center">Forgot Password</h1>
            <p className="text-gray-600 text-center mb-6">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Email"
                type="email"
                {...register('email')}
                error={errors.email?.message}
                placeholder="your@email.com"
              />

              <Button type="submit" variant="primary" className="w-full">
                Send Reset Link
              </Button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Remember your password?{' '}
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

export default ForgotPassword

