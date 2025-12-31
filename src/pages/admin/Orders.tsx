import { Helmet } from 'react-helmet-async'

const AdminOrders = () => {
  // Mock data - in real app, fetch from API
  const orders: any[] = []

  return (
    <>
      <Helmet>
        <title>Manage Orders - Admin - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">Manage Orders</h1>

          <div className="bg-white rounded-xl shadow-md p-6">
            {orders.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Order ID</th>
                      <th className="text-left p-4">Customer</th>
                      <th className="text-left p-4">Total</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order: any) => (
                      <tr key={order.id} className="border-b">
                        <td className="p-4">{order.id}</td>
                        <td className="p-4">{order.customerName}</td>
                        <td className="p-4">Rs. {order.total}</td>
                        <td className="p-4">{order.status}</td>
                        <td className="p-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No orders yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminOrders

