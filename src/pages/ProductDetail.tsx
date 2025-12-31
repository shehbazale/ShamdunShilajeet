import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useAppSelector } from '../hooks/useAppSelector'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { fetchProductById } from '../store/slices/productSlice'
import { addToCart } from '../store/slices/cartSlice'
import Button from '../components/ui/Button'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { ShoppingCart, Star, CheckCircle, FileText, Plus, Minus } from 'lucide-react'
import toast from 'react-hot-toast'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const { currentProduct } = useAppSelector((state) => state.products)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedWeight, setSelectedWeight] = useState(0)

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id))
    }
  }, [dispatch, id])

  useEffect(() => {
    if (currentProduct) {
      setSelectedWeight(currentProduct.weight)
    }
  }, [currentProduct])

  if (!currentProduct) {
    return <LoadingSpinner />
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product: currentProduct, quantity, weight: selectedWeight }))
    toast.success('Added to cart!')
  }

  const handleBuyNow = () => {
    dispatch(addToCart({ product: currentProduct, quantity, weight: selectedWeight }))
    window.location.href = '/checkout'
  }

  return (
    <>
      <Helmet>
        <title>{currentProduct.name} - Sadpara Shilajeet</title>
        <meta name="description" content={currentProduct.description} />
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          <div className="mb-4">
            <Link to="/shop" className="text-primary-700 hover:text-primary-800">
              ← Back to Shop
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-6 md:p-8">
            {/* Image Gallery */}
            <div>
              <div className="mb-4">
                <img
                  src={currentProduct.images[selectedImage] || '/placeholder-product.jpg'}
                  alt={currentProduct.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              {currentProduct.images.length > 1 && (
                <div className="flex gap-2">
                  {currentProduct.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-primary-700' : 'border-gray-200'
                      }`}
                    >
                      <img src={img} alt={`${currentProduct.name} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentProduct.name}
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center text-accent-500 mr-4">
                  <Star size={20} fill="currentColor" />
                  <span className="ml-1 font-semibold">{currentProduct.rating}</span>
                </div>
                <span className="text-gray-600">({currentProduct.reviewCount} reviews)</span>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-primary-700">
                    Rs. {currentProduct.price.toLocaleString()}
                  </span>
                  {currentProduct.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      Rs. {currentProduct.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">Weight: {currentProduct.weight}g</p>
              </div>

              {/* Weight Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Weight</label>
                <div className="flex gap-2">
                  {[10, 20, 30, 50].map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-4 py-2 rounded-lg border-2 ${
                        selectedWeight === weight
                          ? 'border-primary-700 bg-primary-50 text-primary-700'
                          : 'border-gray-300 text-gray-700 hover:border-primary-500'
                      }`}
                    >
                      {weight}g
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {currentProduct.inStock ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={20} className="mr-2" />
                    <span>In Stock ({currentProduct.stock} available)</span>
                  </div>
                ) : (
                  <div className="text-red-600">Out of Stock</div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  disabled={!currentProduct.inStock}
                  className="flex-1 flex items-center justify-center"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleBuyNow}
                  disabled={!currentProduct.inStock}
                  className="flex-1"
                >
                  Buy Now
                </Button>
              </div>

              {/* Lab Test Link */}
              {currentProduct.labTestUrl && (
                <a
                  href={currentProduct.labTestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-700 hover:text-primary-800 mb-6"
                >
                  <FileText size={20} className="mr-2" />
                  View Lab Test Report
                </a>
              )}

              {/* Features */}
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Product Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={18} className="text-green-600 mr-2" />
                    100% Pure & Authentic
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={18} className="text-green-600 mr-2" />
                    Lab Tested
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={18} className="text-green-600 mr-2" />
                    Direct from Himalayas
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Description & Details */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 mb-6 whitespace-pre-line">{currentProduct.description}</p>

            {currentProduct.howToUse && (
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">How to Use</h3>
                <p className="text-gray-700 whitespace-pre-line">{currentProduct.howToUse}</p>
              </div>
            )}

            {currentProduct.benefits && currentProduct.benefits.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {currentProduct.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Reviews Section */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold mb-6">Customer Reviews</h2>
            <div className="space-y-4">
              {/* Reviews would be fetched from API */}
              <p className="text-gray-600">No reviews yet. Be the first to review!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

