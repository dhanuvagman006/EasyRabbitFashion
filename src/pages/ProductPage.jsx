import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'

export default function ProductPage({ products, onAddToCart }) {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <main className="mx-auto w-full max-w-4xl px-4 py-20 text-center md:px-8">
        <Seo
          title="Product Not Found"
          description="The product you are looking for is not available at EasyRabbitFashion."
          path={`/product/${id}`}
          noindex
        />

        <h1 className="font-display text-4xl text-stone-900">Product not found</h1>
        <p className="mt-3 text-stone-600">The item you are looking for does not exist.</p>
        <Link
          to="/shop"
          className="mt-6 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-rose-50"
        >
          Back to Shop
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8 md:py-20">
      <Seo
        title={product.name}
        description={product.description}
        path={`/product/${product.id}`}
        image={product.image}
        type="product"
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          className="h-[460px] w-full rounded-3xl object-cover shadow-xl"
        />

        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs uppercase tracking-wider text-orange-700">
            {product.category}
          </p>
          <h1 className="font-display text-5xl text-stone-900">{product.name}</h1>
          <p className="text-lg text-stone-600">{product.description}</p>
          <p className="text-2xl font-semibold text-stone-900">Rs. {product.price}</p>

          <button
            onClick={() => onAddToCart(product)}
            className="rounded-full bg-stone-900 px-8 py-3 text-sm font-semibold text-rose-50 transition-transform duration-300 hover:-translate-y-1"
          >
            Add to Cart
          </button>

          <Link to="/shop" className="block text-sm font-semibold text-stone-700 underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  )
}
