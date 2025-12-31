import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import { Package, ShoppingBag, User, Settings } from 'lucide-react'
import Button from '../../components/ui/Button'

const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth)
  const { orders } = useAppSelector((state) => state.orders)

  const recentOrders = orders.slice(0, 5)

  return (
    <>
      <Helmet>
        <title>Dashboard - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">
            Welcome back, {user?.name}!
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
                </div>
                <ShoppingBag className="text-primary-700" size={32} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Pending Orders</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {orders.filter(o => o.status === 'pending').length}
                  </p>
                </div>
                <Package className="text-accent-500" size={32} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Delivered</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {orders.filter(o => o.status === 'delivered').length}
                  </p>
                </div>
                <Package className="text-green-600" size={32} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Account</p>
                  <p className="text-lg font-bold text-gray-900">Active</p>
                </div>
                <User className="text-primary-700" size={32} />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-2xl font-bold text-gray-900">Recent Orders</h2>
                  <Link to="/orders">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                {recentOrders.length > 0 ? (
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="border-b pb-4 last:border-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900">Order #{order.id.slice(0, 8)}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">
                              Rs. {order.total.toLocaleString()}
                            </p>
                            <span className={`text-sm px-2 py-1 rounded ${
                              order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Package size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">No orders yet</p>
                    <Link to="/shop" className="mt-4 inline-block">
                      <Button variant="primary">Start Shopping</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/orders">
                    <Button variant="outline" className="w-full justify-start">
                      <Package size={18} className="mr-2" />
                      My Orders
                    </Button>
                  </Link>
                  <Link to="/profile">
                    <Button variant="outline" className="w-full justify-start">
                      <User size={18} className="mr-2" />
                      My Profile
                    </Button>
                  </Link>
                  <Link to="/shop">
                    <Button variant="primary" className="w-full justify-start">
                      <ShoppingBag size={18} className="mr-2" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard

