import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Product } from '../../types'
import { ShoppingCart, Star } from 'lucide-react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addToCart } from '../../store/slices/cartSlice'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(addToCart({ product, quantity: 1, weight: product.weight }))
    toast.success('Added to cart!')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.images[0] || '/placeholder-product.jpg'}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.originalPrice && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center text-accent-500">
              <Star size={16} fill="currentColor" />
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
            </div>
            <span className="ml-2 text-sm text-gray-500">({product.reviewCount} reviews)</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <span className="text-2xl font-bold text-primary-700">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-primary-700 text-white p-2 rounded-lg hover:bg-primary-800 transition-colors"
              title="Add to cart"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">{product.weight}g</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard

