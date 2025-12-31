import React, { Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'
import LoadingSpinner from '../ui/LoadingSpinner'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default Layout

