// Lightweight reveal-on-scroll utility
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function initReveal() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('reveal-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
        }
      })
    },
    { threshold: 0.12 }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

if (typeof window !== 'undefined') {
  // Delay init until DOM is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initReveal()
  } else {
    window.addEventListener('DOMContentLoaded', initReveal)
  }
}

export default initReveal
