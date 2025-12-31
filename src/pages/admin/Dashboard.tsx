import { Helmet } from 'react-helmet-async'
import { Users, Package, DollarSign, TrendingUp } from 'lucide-react'

const AdminDashboard = () => {
  // Mock data - in real app, fetch from API
  const stats = {
    totalUsers: 1250,
    totalOrders: 342,
    totalRevenue: 1250000,
    growth: 12.5,
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="text-primary-700" size={32} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalOrders.toLocaleString()}</p>
                </div>
                <Package className="text-accent-500" size={32} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">Rs. {stats.totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="text-green-600" size={32} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Growth</p>
                  <p className="text-2xl font-bold text-gray-900">+{stats.growth}%</p>
                </div>
                <TrendingUp className="text-blue-600" size={32} />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
              <p className="text-gray-600">Order management coming soon...</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <a href="/admin/products" className="block btn-outline text-center">
                  Manage Products
                </a>
                <a href="/admin/orders" className="block btn-outline text-center">
                  Manage Orders
                </a>
                <a href="/admin/users" className="block btn-outline text-center">
                  Manage Users
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard

