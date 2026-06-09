const THEME_KEY = 'portfolio-theme'

const getStoredTheme = () => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(THEME_KEY)
}

const getSystemTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const getInitialTheme = () => {
  const stored = getStoredTheme()
  if (stored === 'light' || stored === 'dark') return stored
  return getSystemTheme()
}

export const applyTheme = (theme) => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(theme)
  localStorage.setItem(THEME_KEY, theme)
}

export const toggleTheme = () => {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  const next = current === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  return next
}

export const initTheme = () => {
  const theme = getInitialTheme()
  applyTheme(theme)
  return theme
}

initTheme()
