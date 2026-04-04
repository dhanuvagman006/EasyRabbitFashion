import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'

export default function HomePage({ products, onAddToCart }) {
  const featuredProducts = products.slice(0, 4)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EasyRabbitFashion',
    url: import.meta.env.VITE_SITE_URL || 'https://easyrabbitfashion.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${import.meta.env.VITE_SITE_URL || 'https://easyrabbitfashion.vercel.app'}/shop`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <main>
      <Seo
        title="Trendy Women Fashion Store"
        description="Shop the latest dresses and fashion essentials at EasyRabbitFashion. Explore curated pieces, new drops, and affordable styles."
        path="/"
        jsonLd={jsonLd}
      />

      <section className="relative isolate overflow-hidden px-4 pb-16 pt-16 md:px-8 md:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#f97316_0%,_transparent_50%),radial-gradient(circle_at_bottom_left,_#ec4899_0%,_transparent_45%)] opacity-25" />

        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-stone-900 px-4 py-2 text-xs uppercase tracking-[0.2em] text-rose-50">
              New Season Edit
            </p>
            <h1 className="font-display text-5xl leading-tight text-stone-900 md:text-7xl">
              Dress Loud,
              <br />
              Move Easy.
            </h1>
            <p className="max-w-xl text-base text-stone-700 md:text-lg">
              EasyRabbitFashion blends statement streetwear with everyday comfort. Discover fits
              made to stand out in every frame.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-rose-50 transition-transform duration-300 hover:-translate-y-1"
              >
                Explore Collection
              </Link>
              <a
                href="#featured"
                className="rounded-full border border-stone-900 px-6 py-3 text-sm font-semibold text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-rose-50"
              >
                See Featured
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-8 -top-10 h-28 w-28 rounded-full bg-orange-400/40 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
              alt="Fashion model wearing EasyRabbitFashion style"
              className="w-full rounded-[2.5rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl text-stone-900">Featured Pieces</h2>
            <p className="mt-2 text-sm text-stone-600">Curated picks from our latest drop.</p>
          </div>
          <Link to="/shop" className="text-sm font-semibold text-stone-900 underline decoration-orange-500">
            View all products
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </main>
  )
}
