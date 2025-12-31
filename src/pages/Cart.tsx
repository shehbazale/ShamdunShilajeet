import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice'
import Button from '../components/ui/Button'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'

const Cart = () => {
  const { items, total, itemCount } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const tax = total * 0.05 // 5% tax
  const shipping = total > 5000 ? 0 : 500
  const finalTotal = total + tax + shipping

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Cart - Sadpara Shilajeet</title>
        </Helmet>
        <div className="section-padding bg-gray-50 min-h-screen">
          <div className="container-custom">
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
              <Link to="/shop">
                <Button variant="primary">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Cart - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex gap-4">
                    <img
                      src={item.product.images[0] || '/placeholder-product.jpg'}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{item.selectedWeight}g</p>
                      <p className="text-lg font-bold text-primary-700">
                        Rs. {item.product.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => dispatch(removeFromCart(item.product.id))}
                        className="text-red-600 hover:text-red-700 p-2"
                      >
                        <Trash2 size={20} />
                      </button>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => dispatch(updateQuantity({ productId: item.product.id, quantity: item.quantity - 1 }))}
                          className="p-1 border border-gray-300 rounded hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(updateQuantity({ productId: item.product.id, quantity: item.quantity + 1 }))}
                          className="p-1 border border-gray-300 rounded hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({itemCount} items)</span>
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
                  {total < 5000 && (
                    <p className="text-sm text-accent-600">
                      Add Rs. {(5000 - total).toLocaleString()} more for free shipping!
                    </p>
                  )}
                </div>
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>Rs. {finalTotal.toLocaleString()}</span>
                  </div>
                </div>
                <Link to="/checkout" className="block">
                  <Button variant="primary" className="w-full">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Link to="/shop" className="block mt-4">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart

