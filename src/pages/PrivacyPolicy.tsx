import { Helmet } from 'react-helmet-async'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 space-y-6">
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At Sadpara Shilajeet, we are committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, and safeguard your personal information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Shipping address</li>
                <li>Payment information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at 
                info@sadparashilajeet.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy

