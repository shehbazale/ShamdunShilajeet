import { Link, useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import toast from 'react-hot-toast'
import api from '../../utils/api'

const resetPasswordSchema = z.object({
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>

const ResetPassword = () => {
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      await api.put(`/auth/reset-password/${token}`, { password: data.password })
      toast.success('Password reset successful!')
      navigate('/login')
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to reset password')
    }
  }

  return (
    <>
      <Helmet>
        <title>Reset Password - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen flex items-center">
        <div className="container-custom max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2 text-center">Reset Password</h1>
            <p className="text-gray-600 text-center mb-6">Enter your new password</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="New Password"
                type="password"
                {...register('password')}
                error={errors.password?.message}
                placeholder="••••••••"
              />
              <Input
                label="Confirm Password"
                type="password"
                {...register('confirmPassword')}
                error={errors.confirmPassword?.message}
                placeholder="••••••••"
              />

              <Button type="submit" variant="primary" className="w-full">
                Reset Password
              </Button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              <Link to="/login" className="text-primary-700 hover:text-primary-800 font-semibold">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword

