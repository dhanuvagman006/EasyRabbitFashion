import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navLinkBase = 'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300'

export default function Navbar() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-rose-50/85 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <NavLink to="/" className="font-display text-2xl tracking-wide text-stone-900">
          EasyRabbitFashion
        </NavLink>

        <div className="flex items-center gap-2 md:gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? 'bg-stone-900 text-rose-50' : 'text-stone-700 hover:bg-stone-900 hover:text-rose-50'}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? 'bg-stone-900 text-rose-50' : 'text-stone-700 hover:bg-stone-900 hover:text-rose-50'}`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${navLinkBase} relative ${isActive ? 'bg-stone-900 text-rose-50' : 'text-stone-700 hover:bg-stone-900 hover:text-rose-50'}`
            }
          >
            Cart
            <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs text-white">
              {totalItems}
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
