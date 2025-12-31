import { Helmet } from 'react-helmet-async'

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 space-y-6">
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The information on this website is for educational purposes only. Our products are not 
                intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified 
                healthcare provider before starting any new supplement regimen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">No Medical Claims</h2>
              <p className="text-gray-700 leading-relaxed">
                We make no medical claims about our products. Any statements made on this website have 
                not been evaluated by health authorities. Our products are dietary supplements, not 
                medications.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Individual Results</h2>
              <p className="text-gray-700 leading-relaxed">
                Individual results may vary. The effectiveness of our products may differ from person to 
                person. We do not guarantee specific results.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Consult Your Doctor</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any medical conditions, are pregnant, nursing, or taking medications, please 
                consult your healthcare provider before using our products.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Disclaimer

