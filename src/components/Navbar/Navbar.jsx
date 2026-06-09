import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toggleTheme } from "../../utils/theme"

const navItems = [
  { label: "Home", to: { pathname: "/", hash: "#home" } },
  { label: "About", to: { pathname: "/", hash: "#about" } },
  { label: "Skills", to: { pathname: "/", hash: "#skills" } },
  { label: "Work", to: { pathname: "/", hash: "#work" } },
  { label: "Education", to: { pathname: "/", hash: "#education" } },
  { label: "Contact", to: "/contact" },
  
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const navigate = useNavigate()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    }
  }, [])

  const handleThemeToggle = () => {
    setTheme(toggleTheme())
  }

  const handleHashNavigation = (to) => {
    const hash = to.hash || ''
    const pathname = to.pathname || '/' 

    const scrollToHash = () => {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        // fallback: set location hash
        window.location.hash = hash
      }
    }

    if (window.location.pathname === pathname) {
      scrollToHash()
    } else {
      navigate(pathname)
      setTimeout(scrollToHash, 60)
    }
  }

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/10 bg-white/80 backdrop-blur-xl transition-colors duration-200 dark:border-white/10 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to={{ pathname: "/", hash: "#home" }} className="text-lg font-semibold tracking-tight text-slate-900 transition hover:text-cyan-300 md:text-xl dark:text-white">
          <span className="text-cyan-400">Kanakendu </span> Portfolio
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isExternal = item.external === true
            const classes = "rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"

            if (item.to && typeof item.to === 'object' && item.to.hash) {
              return (
                <a
                  key={item.label}
                  href={item.to.hash}
                  className={classes}
                  onClick={(e) => {
                    e.preventDefault()
                    handleHashNavigation(item.to)
                  }}
                >
                  {item.label}
                </a>
              )
            }

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
          onClick={handleThemeToggle}
          className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-slate-100 text-slate-900 transition duration-200 hover:border-cyan-400 hover:text-cyan-300 dark:border-white/10 dark:bg-slate-950 dark:text-white"
          aria-label="Toggle light and dark theme"
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v2" />
              <path d="M12 19v2" />
              <path d="M4.22 4.22l1.42 1.42" />
              <path d="M18.36 18.36l1.42 1.42" />
              <path d="M1 12h2" />
              <path d="M21 12h2" />
              <path d="M4.22 19.78l1.42-1.42" />
              <path d="M18.36 5.64l1.42-1.42" />
              <circle cx="12" cy="12" r="5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
            </svg>
          )}
        </button>

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

      <div className={`md:hidden overflow-hidden bg-slate-50/95 transition-all duration-300 dark:bg-slate-950/95 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="space-y-1 px-4 pb-4">
          {navItems.map((item) => {
            const isExternal = item.external === true
            const classes = "block rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition duration-200 hover:bg-cyan-500/10 hover:text-slate-900 dark:text-gray-200 dark:hover:text-white"

            if (item.to && typeof item.to === 'object' && item.to.hash) {
              return (
                <a
                  key={item.label}
                  href={item.to.hash}
                  className={classes}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    handleHashNavigation(item.to)
                  }}
                >
                  {item.label}
                </a>
              )
            }

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