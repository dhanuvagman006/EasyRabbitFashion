import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useCart } from './context/CartContext'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ShopPage from './pages/ShopPage'
import { fetchProducts } from './services/productService'

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const { cartItems, totalPrice, addToCart, updateQuantity, removeFromCart, clearCart } = useCart()

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Something went wrong while loading products')
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (isLoading) {
    return <p className="px-6 py-20 text-center text-stone-700">Loading products...</p>
  }

  if (errorMessage) {
    return <p className="px-6 py-20 text-center text-red-700">{errorMessage}</p>
  }

  return (
    <div className="relative min-h-screen bg-rose-50/70">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(219,39,119,0.15),_transparent_40%)]" />
      <Navbar />

      <div className="animate-rise">
        <Routes>
          <Route path="/" element={<HomePage products={products} onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage products={products} onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductPage products={products} onAddToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                totalPrice={totalPrice}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
