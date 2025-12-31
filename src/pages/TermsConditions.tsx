import { Helmet } from 'react-helmet-async'

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 space-y-6">
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and 
                provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on our website 
                for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Product Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to provide accurate product information. However, we do not warrant that 
                product descriptions or other content on this site is accurate, complete, or error-free.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Pricing</h2>
              <p className="text-gray-700 leading-relaxed">
                All prices are in Pakistani Rupees (PKR) and are subject to change without notice. 
                We reserve the right to modify prices at any time.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Sadpara Shilajeet or its suppliers be liable for any damages arising 
                out of the use or inability to use the materials on our website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsConditions

