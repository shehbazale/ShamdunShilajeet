import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAppSelector } from '../../hooks/useAppSelector'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import toast from 'react-hot-toast'
import api from '../../utils/api'

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10,12}$/, 'Invalid phone number').optional().or(z.literal('')),
})

type ProfileFormData = z.infer<typeof profileSchema>

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
    },
  })

  const onSubmit = async (data: ProfileFormData) => {
    try {
      await api.put('/auth/update-profile', data)
      toast.success('Profile updated successfully!')
      // Refresh user data
      window.location.reload()
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to update profile')
    }
  }

  return (
    <>
      <Helmet>
        <title>Profile - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom max-w-2xl">
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-6">Personal Information</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Full Name"
                {...register('name')}
                error={errors.name?.message}
              />
              <Input
                label="Email"
                type="email"
                {...register('email')}
                error={errors.email?.message}
                disabled
              />
              <Input
                label="Phone Number"
                type="tel"
                {...register('phone')}
                error={errors.phone?.message}
              />

              <Button type="submit" variant="primary">
                Update Profile
              </Button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mt-6">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-6">Saved Addresses</h2>
            <p className="text-gray-600">No saved addresses yet.</p>
            <Button variant="outline" className="mt-4">
              Add Address
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile

