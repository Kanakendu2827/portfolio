import React, { useEffect, useState, useRef } from 'react'

const CertificateSlider = () => {
  const imagesObj = import.meta.glob('../../assets/certificates/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' })
  const images = Object.values(imagesObj)

  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(1)
  const autoplayRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth
      if (w >= 1024) setVisible(3)
      else if (w >= 640) setVisible(2)
      else setVisible(1)
    }
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  useEffect(() => {
    const max = Math.max(0, images.length - visible)
    if (images.length <= visible) {
      setIndex(0)
      return
    }
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i >= max ? 0 : i + 1))
    }, 3000)
    return () => clearInterval(autoplayRef.current)
  }, [images.length, visible])

  const maxIndex = Math.max(0, images.length - visible)

  useEffect(() => {
    // Clamp index when visible/length changes
    setIndex((i) => Math.min(i, maxIndex))
  }, [visible, images.length])

  const prev = () => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1))
  }

  const next = () => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1))
  }

  if (images.length === 0) {
    return (
      <div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4 text-center text-sm text-slate-400">
        Add certificate images to <span className="font-mono">src/assets/certificates/</span> to show the slider.
      </div>
    )
  }

  // Calculate slide width and translation based on visible count
  const slideWidthPercent = 100 / visible
  const clampedIndex = Math.min(index, Math.max(0, images.length - visible))

  return (
    <div className="mb-6 w-full relative">
      <div className="absolute -left-2 top-1/2 z-20 -translate-y-1/2">
        <button onClick={prev} className="p-2 rounded-md bg-white/6 hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute -right-2 top-1/2 z-20 -translate-y-1/2">
        <button onClick={next} className="p-2 rounded-md bg-white/6 hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div
        ref={containerRef}
        className="overflow-hidden rounded-xl"
        onMouseEnter={() => clearInterval(autoplayRef.current)}
        onMouseLeave={() => {
          if (images.length > visible) autoplayRef.current = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000)
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${(images.length * 100) / visible}%`, transform: `translateX(-${clampedIndex * slideWidthPercent}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="px-2" style={{ width: `${slideWidthPercent}%` }}>
              <div className="h-36 sm:h-44 md:h-48 lg:h-56 flex items-center justify-center rounded-xl bg-white/3 p-3">
                <img src={src} alt={`certificate-${i}`} className="max-h-full w-auto object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full ${i === clampedIndex ? 'bg-white' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default CertificateSlider
