import React from 'react'

const About = () => {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300 shadow-sm shadow-cyan-500/10">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            <span className="text-sm font-semibold uppercase tracking-[0.28em]">About Me</span>
          </div>

          <div>
            <div>
              <h2 className="text-4xl font-bold text-white sm:text-5xl">
                Crafting modern web experiences with curiosity and practical projects.
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              I&apos;m Kanakendu Das, an aspiring Full Stack Developer and AI Developer building responsive, user-friendly applications.
              I combine modern frontend design with backend fundamentals and practical AI ideas to solve problems and learn quickly.
            </p>
          </div>

          <div className="space-y-4 text-slate-300">
            <p>
              My current focus is on building strong skills in React.js, JavaScript, Node.js, Express.js, MongoDB,
              and AI/ML integration. I&apos;m creating hands-on work that combines polished UI and dependable backend logic.
            </p>
            <p>
              I have completed 5 projects so far, and I&apos;m eager to keep learning, growing, and applying new
              development practices while working on real-world applications.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">What I bring</p>
              <div className="mt-5 space-y-4 text-slate-200">
                <div className="rounded-3xl bg-slate-950/70 p-4">
                  <p className="text-lg font-semibold text-white">Responsive Frontends</p>
                  <p className="mt-2 text-sm text-slate-400">Crafting modern React interfaces with strong UX and polished visuals.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-4">
                  <p className="text-lg font-semibold text-white">Reliable Backends</p>
                  <p className="mt-2 text-sm text-slate-400">Building REST APIs and database systems that are scalable and maintainable.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-4">
                  <p className="text-lg font-semibold text-white">AI-powered features</p>
                  <p className="mt-2 text-sm text-slate-400">Integrating intelligent automation and ML capabilities to enhance app value.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-center">
                <p className="text-3xl font-bold text-white">Entry</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">Developer Level</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-center">
                <p className="text-3xl font-bold text-white">5</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About