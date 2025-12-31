import { Helmet } from 'react-helmet-async'

const AdminUsers = () => {
  // Mock data - in real app, fetch from API
  const users = []

  return (
    <>
      <Helmet>
        <title>Manage Users - Admin - Sadpara Shilajeet</title>
      </Helmet>

      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="container-custom">
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">Manage Users</h1>

          <div className="bg-white rounded-xl shadow-md p-6">
            {users.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Name</th>
                      <th className="text-left p-4">Email</th>
                      <th className="text-left p-4">Role</th>
                      <th className="text-left p-4">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user: any) => (
                      <tr key={user.id} className="border-b">
                        <td className="p-4">{user.name}</td>
                        <td className="p-4">{user.email}</td>
                        <td className="p-4">{user.role}</td>
                        <td className="p-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No users found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminUsers

