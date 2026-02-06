import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CustomPrintPage from './pages/CustomPrintPage'
import ContactPage from './pages/ContactPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-noir">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-16 pt-12 md:px-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/custom-print" element={<CustomPrintPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
