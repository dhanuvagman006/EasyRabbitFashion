import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function CartPage({ cartItems, totalPrice, updateQuantity, removeFromCart, clearCart }) {
  const handleWhatsAppSubmit = () => {
    const whatsappNumber = '916360139965'
    const itemLines = cartItems.map(
      (item, index) => `${index + 1}. ${item.name} x ${item.quantity} = Rs. ${item.price * item.quantity}`,
    )

    const message = [
      'Hello EasyRabbitFashion, I would like to place this order:',
      '',
      ...itemLines,
      '',
      `Total: Rs. ${totalPrice}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 md:px-8">
      <Seo
        title="Your Cart"
        description="Review selected items in your EasyRabbitFashion cart before checkout."
        path="/cart"
        noindex
      />

      <h1 className="font-display text-5xl text-stone-900">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-stone-300 bg-white p-10 text-center">
          <p className="text-stone-600">Your cart is empty. Add something stylish.</p>
          <Link
            to="/shop"
            className="mt-5 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-rose-50"
          >
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <section className="space-y-4">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:grid-cols-[110px_1fr]"
              >
                <img src={item.image} alt={item.name} className="h-28 w-full rounded-2xl object-cover" />

                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="font-display text-3xl text-stone-900">{item.name}</h2>
                    <p className="text-sm text-stone-600">Rs. {item.price} each</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                      className="w-20 rounded-xl border border-stone-300 px-3 py-2 text-sm"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-full border border-red-500 px-3 py-2 text-xs font-semibold text-red-500 transition-colors hover:bg-red-500 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="h-fit rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="font-display text-3xl text-stone-900">Summary</h2>
            <p className="mt-4 text-sm text-stone-600">Total amount</p>
            <p className="mt-1 text-3xl font-semibold text-stone-900">Rs. {totalPrice}</p>

            <button
              onClick={clearCart}
              className="mt-6 w-full rounded-full border border-stone-900 px-4 py-3 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-900 hover:text-rose-50"
            >
              Clear Cart
            </button>

            <button
              onClick={handleWhatsAppSubmit}
              className="mt-3 w-full rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              Submit on WhatsApp
            </button>
          </aside>
        </div>
      )}
    </main>
  )
}
