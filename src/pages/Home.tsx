import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAppSelector } from '../hooks/useAppSelector'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { fetchFeaturedProducts } from '../store/slices/productSlice'
import ProductCard from '../components/ui/ProductCard'
import Button from '../components/ui/Button'
import { 
  Shield, 
  Award, 
  Truck, 
  Heart, 
  Zap, 
  Dumbbell, 
  ShieldCheck,
  CheckCircle,
  Star,
  ChevronRight
} from 'lucide-react'

const Home = () => {
  const dispatch = useAppDispatch()
  const { featuredProducts } = useAppSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchFeaturedProducts())
  }, [dispatch])

  const benefits = [
    { icon: Zap, title: 'Natural Energy', description: 'Support your daily energy levels naturally' },
    { icon: Dumbbell, title: 'Strength & Vitality', description: 'Promote overall strength and wellness' },
    { icon: ShieldCheck, title: 'Immune Support', description: 'Help maintain a healthy immune system' },
  ]

  const features = [
    { icon: Award, title: 'Lab Tested', description: 'Third-party tested for purity' },
    { icon: Shield, title: '100% Authentic', description: 'Directly sourced from Himalayas' },
    { icon: Truck, title: 'Free Shipping', description: 'On orders above Rs. 5000' },
    { icon: Heart, title: 'Customer Care', description: '24/7 support available' },
  ]

  const reviews = [
    { name: 'Ahmed Khan', rating: 5, comment: 'Amazing product! Feel more energetic throughout the day.' },
    { name: 'Fatima Ali', rating: 5, comment: 'Authentic and pure. Highly recommended!' },
    { name: 'Hassan Raza', rating: 5, comment: 'Best quality Shilajit I have ever used.' },
  ]

  const faqs = [
    { q: 'What is Shilajit?', a: 'Shilajit is a natural substance found in the Himalayan mountains, known for its wellness-supporting properties.' },
    { q: 'How to use Shilajit?', a: 'Take a small amount (rice grain size) with warm water or milk, preferably in the morning on an empty stomach.' },
    { q: 'Is it safe?', a: 'Yes, our Shilajit is lab-tested and 100% pure. However, consult your healthcare provider if you have medical conditions.' },
    { q: 'What is the shelf life?', a: 'Our Shilajit has a shelf life of 2 years when stored in a cool, dry place.' },
  ]

  return (
    <>
      <Helmet>
        <title>Sadpara Shilajeet - Pure Himalayan Shilajit | Premium Quality</title>
        <meta name="description" content="Buy authentic, lab-tested Himalayan Shilajit. Premium quality, pure and natural. Free shipping on orders above Rs. 5000." />
        <meta name="keywords" content="shilajit, himalayan shilajit, pure shilajit, pakistan, herbal supplement" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Pure Himalayan Shilajit
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Authentic, Lab-Tested, and Directly Sourced from the Mountains
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button variant="secondary" size="lg">
                    Shop Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/hero-shilajit.jpg"
                alt="Himalayan Shilajit"
                className="rounded-2xl shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/8b6b4f/ffffff?text=Pure+Himalayan+Shilajit'
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Natural Wellness Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the natural benefits of pure Himalayan Shilajit
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center p-6"
              >
                <benefit.icon className="w-12 h-12 text-primary-700 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <feature.icon className="w-10 h-10 text-accent-500 mx-auto mb-3" />
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Products
              </h2>
              <p className="text-gray-600">Our best-selling authentic Shilajit</p>
            </motion.div>
            <Link to="/shop">
              <Button variant="outline" className="hidden md:flex items-center">
                View All <ChevronRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="primary">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                <p className="font-semibold text-gray-900">- {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers and wellness tips
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <Button variant="secondary" type="submit">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home

