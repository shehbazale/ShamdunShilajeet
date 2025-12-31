import { Helmet } from 'react-helmet-async'

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 space-y-6">
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Return Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We accept returns within 7 days of delivery. Products must be unopened and in their 
                original packaging. To initiate a return, please contact us at info@sadparashilajeet.com
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                Once we receive and inspect your return, we will notify you of the approval or rejection 
                of your refund. If approved, your refund will be processed within 10 business days.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Non-Refundable Items</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Opened or used products</li>
                <li>Products without original packaging</li>
                <li>Products returned after 7 days</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Shipping Costs</h2>
              <p className="text-gray-700 leading-relaxed">
                Return shipping costs are the responsibility of the customer unless the product is defective 
                or we made an error.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default RefundPolicy

