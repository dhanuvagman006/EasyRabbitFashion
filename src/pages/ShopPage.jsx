import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'

export default function ShopPage({ products, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map((product) => product.category))
    return ['all', ...uniqueCategories]
  }, [products])

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products
    }

    return products.filter((product) => product.category === selectedCategory)
  }, [products, selectedCategory])

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 md:px-8">
      <Seo
        title="Shop"
        description="Browse all EasyRabbitFashion products by category and discover dresses and stylish everyday looks."
        path="/shop"
      />

      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-display text-5xl text-stone-900">Shop</h1>
          <p className="mt-2 text-stone-600">Browse all pieces and filter by category.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-stone-900 text-rose-50'
                  : 'border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-rose-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="rounded-2xl border border-stone-300 bg-white p-8 text-center text-stone-600">
          No products found in this category.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </main>
  )
}
