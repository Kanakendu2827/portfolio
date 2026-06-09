import React from 'react'

const Footer = () => {
  return (
    <footer className="mx-auto mt-20 max-w-5xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl text-slate-300">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Stay connected</p>
          <h2 className="text-3xl font-bold text-white">Let’s build something great together.</h2>
          <p className="max-w-xl leading-7 text-slate-400">
            I&apos;m always open to new opportunities, collaborations, and freelance work. Feel free to reach out for projects, internships, or just to say hello.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
          <div className="mt-4 space-y-3 text-slate-200">
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <a href="mailto:kanakendudas42@gmail.com" className="text-lg font-semibold text-white hover:text-cyan-300 transition">kanakendudas42@gmail.com</a>
            </div>
            <div>
              <p className="text-sm text-slate-400">Phone</p>
              <a href="tel:+919748327696" className="text-lg font-semibold text-white hover:text-cyan-300 transition">+91 9748327696</a>
            </div>
            <div>
              <p className="text-sm text-slate-400">GitHub</p>
              <a href="https://github.com/Kanakendu2827/portfolio" target="_blank" rel="noreferrer" className="text-lg font-semibold text-white hover:text-cyan-300 transition">
                github.com/Kanakendu2827/portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kanakendu Das. All rights reserved.</p>
        <div className="mt-4 flex flex-wrap gap-4 sm:mt-0 text-slate-400">
          <a href="#home" className="transition hover:text-cyan-300">Home</a>
          <a href="#about" className="transition hover:text-cyan-300">About</a>
          <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
          <a href="#work" className="transition hover:text-cyan-300">Projects</a>
          <a href="#education" className="transition hover:text-cyan-300">Education</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
