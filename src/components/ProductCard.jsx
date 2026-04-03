import { Link } from 'react-router-dom'

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs uppercase tracking-wide text-stone-700">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="space-y-3 p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-2xl text-stone-900">{product.name}</h3>
        </Link>

        <p className="min-h-10 text-sm text-stone-600">{product.description}</p>

        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-semibold text-stone-900">Rs. {product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="rounded-full border border-stone-900 px-4 py-2 text-sm font-semibold text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
