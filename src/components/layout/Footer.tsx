import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Sadpara Shilajeet</h3>
            <p className="text-gray-300 mb-4">
              Pure Himalayan Shilajit sourced directly from the mountains. 
              Lab-tested and authentic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-accent-400 transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-accent-400 transition">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-accent-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-accent-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-accent-400 transition">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-accent-400 transition">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone size={18} />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail size={18} />
                <span>info@sadparashilajeet.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sadpara Shilajeet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

