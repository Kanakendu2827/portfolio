import React from 'react'

export const Edu = () => {
  return (
    <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
      <div className="mb-8 grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Education</p>
          <h2 className="mt-3 text-4xl font-bold text-white">Academic highlights</h2>
          <p className="mt-4 max-w-xl text-slate-300">
            A quick overview of my education journey, from secondary school through higher secondary, now progressing into B.Tech.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Currently</p>
          <p className="mt-3 text-2xl font-semibold text-white">B.Tech</p>
          <p className="mt-2 text-slate-300">Supreme Knowledge Foundation</p>
          <p className="text-slate-300">Under Maulana Abul Kalam Azad Institute Of Technology</p>
          <span className="mt-4 inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
            In progress
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-slate-900/90">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">Higher Secondary (Class XII)</h3>
              <p className="mt-2 text-sm text-slate-300">Singur Mahamaya High School</p>
            </div>
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">2023</span>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            West Bengal Council of Higher Secondary Education (WBCHSE)
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-slate-900/90">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">Secondary (Class X)</h3>
              <p className="mt-2 text-sm text-slate-300">DD Bharati Vidyalaya</p>
            </div>
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">2021</span>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            West Bengal Board of Secondary Education (WBBSE)
          </p>
        </div>
      </div>
    </div>
  )
}
export default Edu