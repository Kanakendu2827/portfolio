import React, { useState } from "react"
import { Link } from "react-router-dom"

const navItems = [
  { label: "Home", to: { pathname: "/", hash: "#home" } },
  { label: "About", to: { pathname: "/", hash: "#about" } },
  { label: "Skills", to: { pathname: "/", hash: "#skills" } },
  { label: "Work", to: { pathname: "/", hash: "#work" } },
  { label: "Education", to: { pathname: "/", hash: "#education" } },
  { label: "Contact", to: "/contact" },
  { label: "GitHub", href: "https://github.com/your-github-username", external: true },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to={{ pathname: "/", hash: "#home" }} className="text-lg font-semibold tracking-tight text-white transition hover:text-cyan-300 md:text-xl">
          <span className="text-cyan-400">Kanakendu</span> Portfolio
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isExternal = item.external === true
            const classes = "rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white"

            if (item.to) {
              return (
                <Link key={item.label} to={item.to} className={classes}>
                  {item.label}
                </Link>
              )
            }

            return (
              <a
                key={item.label}
                href={item.href}
                className={classes}
                {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {item.label}
              </a>
            )
          })}
        </nav>


        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition duration-200 hover:border-cyan-400 hover:text-cyan-300 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden bg-slate-950/95 transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="space-y-1 px-4 pb-4">
          {navItems.map((item) => {
            const isExternal = item.external === true
            const classes = "block rounded-2xl px-4 py-3 text-base font-medium text-gray-200 transition duration-200 hover:bg-cyan-500/10 hover:text-white"

            if (item.to) {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={classes}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            }

            return (
              <a
                key={item.label}
                href={item.href}
                className={classes}
                onClick={() => setOpen(false)}
                {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar