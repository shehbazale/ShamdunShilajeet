import { Helmet } from 'react-helmet-async'
import { Award, Shield, Mountain } from 'lucide-react'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Sadpara Shilajeet</title>
        <meta name="description" content="Learn about Sadpara Shilajeet - your trusted source for pure Himalayan Shilajit." />
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sadpara Shilajeet is dedicated to bringing you the purest, most authentic Himalayan Shilajit 
              directly from the mountains. We believe in the power of nature and the traditional wisdom 
              that has been passed down through generations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our commitment is to provide you with lab-tested, 100% pure Shilajit that maintains its 
              natural properties and benefits. We source our products directly from the Himalayas, 
              ensuring authenticity and quality at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Mountain className="w-12 h-12 text-primary-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Direct from Himalayas</h3>
              <p className="text-gray-600 text-sm">Sourced directly from the pristine mountains</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Shield className="w-12 h-12 text-primary-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Lab Tested</h3>
              <p className="text-gray-600 text-sm">Third-party tested for purity and quality</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Award className="w-12 h-12 text-primary-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">100% Authentic</h3>
              <p className="text-gray-600 text-sm">Guaranteed pure and natural</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide premium quality, authentic Himalayan Shilajit to our customers while maintaining 
              the highest standards of purity and authenticity. We are committed to transparency, quality, 
              and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

