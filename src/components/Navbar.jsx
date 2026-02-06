import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/custom-print', label: 'Custom Print' },
  { to: '/contact', label: 'Contact' }
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-noir/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <NavLink to="/" className="font-serif text-xl tracking-[0.24em] text-pearl">
          SANYASA
        </NavLink>
        <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 shadow-luxe">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                    isActive
                      ? 'bg-champagne text-noir'
                      : 'text-pearl/80 hover:bg-white/10 hover:text-pearl'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
