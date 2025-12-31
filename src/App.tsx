import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes/routes'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/auth/ProtectedRoute'

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const Component = route.component
          
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.protected ? (
                  <ProtectedRoute adminOnly={route.adminOnly}>
                    <Layout>
                      <Component />
                    </Layout>
                  </ProtectedRoute>
                ) : (
                  <Layout>
                    <Component />
                  </Layout>
                )
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App

