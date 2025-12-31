import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAppSelector } from '../hooks/useAppSelector'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { createOrder } from '../store/slices/orderSlice'
import { clearCart } from '../store/slices/cartSlice'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { CreditCard, Truck } from 'lucide-react'
import toast from 'react-hot-toast'

const addressSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[0-9]{10,12}$/, 'Invalid phone number'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  province: z.string().min(2, 'Province is required'),
  postalCode: z.string().regex(/^[0-9]{5}$/, 'Invalid postal code'),
  country: z.string().min(2, 'Country is required'),
})

type AddressFormData = z.infer<typeof addressSchema>

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { items, total } = useAppSelector((state) => state.cart)
  const { user } = useAppSelector((state) => state.auth)
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'stripe'>('cod')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      country: 'Pakistan',
    },
  })

  const tax = total * 0.05
  const shipping = total > 5000 ? 0 : 500
  const finalTotal = total + tax + shipping

  const onSubmit = async (data: AddressFormData) => {
    if (items.length === 0) {
      toast.error('Your cart is empty')
      return
    }

    setIsSubmitting(true)
    try {
      const orderData = {
        items,
        shippingAddress: data,
        paymentMethod,
        total: finalTotal,
        subtotal: total,
        tax,
        shipping,
      }

      await dispatch(createOrder(orderData)).unwrap()
      dispatch(clearCart())
      toast.success('Order placed successfully!')
      navigate('/orders')
    } catch (error) {
      toast.error('Failed to place order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add items to your cart to checkout</p>
            <Button variant="primary" onClick={() => navigate('/shop')}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Checkout - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Shipping Address */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="font-serif text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Truck size={24} className="mr-2" />
                    Shipping Address
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      {...register('fullName')}
                      error={errors.fullName?.message}
                      defaultValue={user?.name}
                    />
                    <Input
                      label="Phone Number"
                      {...register('phone')}
                      error={errors.phone?.message}
                      type="tel"
                    />
                    <Input
                      label="Address"
                      {...register('address')}
                      error={errors.address?.message}
                      className="md:col-span-2"
                    />
                    <Input
                      label="City"
                      {...register('city')}
                      error={errors.city?.message}
                    />
                    <Input
                      label="Province"
                      {...register('province')}
                      error={errors.province?.message}
                    />
                    <Input
                      label="Postal Code"
                      {...register('postalCode')}
                      error={errors.postalCode?.message}
                    />
                    <Input
                      label="Country"
                      {...register('country')}
                      error={errors.country?.message}
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="font-serif text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <CreditCard size={24} className="mr-2" />
                    Payment Method
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-semibold">Cash on Delivery</div>
                        <div className="text-sm text-gray-600">Pay when you receive</div>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="stripe"
                        checked={paymentMethod === 'stripe'}
                        onChange={() => setPaymentMethod('stripe')}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-semibold">Online Payment</div>
                        <div className="text-sm text-gray-600">Secure payment via Stripe</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                  <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                  <div className="space-y-2 mb-4">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {item.product.name} x{item.quantity}
                        </span>
                        <span>Rs. {(item.product.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 space-y-2 mb-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>Rs. {total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax (5%)</span>
                      <span>Rs. {tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `Rs. ${shipping.toLocaleString()}`}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>Rs. {finalTotal.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    isLoading={isSubmitting}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Checkout

