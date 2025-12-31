import { Helmet } from 'react-helmet-async'
import Button from '../../components/ui/Button'
import { Plus, Edit, Trash2 } from 'lucide-react'

const AdminProducts = () => {
  // Mock data - in real app, fetch from API
  const products = []

  return (
    <>
      <Helmet>
        <title>Manage Products - Admin - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-serif text-3xl font-bold text-gray-900">Manage Products</h1>
            <Button variant="primary" className="flex items-center gap-2">
              <Plus size={20} />
              Add Product
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            {products.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Product</th>
                      <th className="text-left p-4">Price</th>
                      <th className="text-left p-4">Stock</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product: any) => (
                      <tr key={product.id} className="border-b">
                        <td className="p-4">{product.name}</td>
                        <td className="p-4">Rs. {product.price}</td>
                        <td className="p-4">{product.stock}</td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <button className="text-primary-700 hover:text-primary-800">
                              <Edit size={18} />
                            </button>
                            <button className="text-red-600 hover:text-red-700">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No products yet</p>
                <Button variant="primary" className="flex items-center gap-2 mx-auto">
                  <Plus size={20} />
                  Add Your First Product
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminProducts

