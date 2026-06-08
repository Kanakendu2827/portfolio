import React from 'react'

const projectItems = [
  {
    icon: '⛅',
    title: 'Weather Website',
    description:
      'A responsive weather website deployed on Vercel that shows current weather details and looks great on mobile and desktop.',
    features: ['React', 'Tailwind CSS', 'API integration', 'Vercel'],
    liveLink: 'https://weather-website-iota-seven.vercel.app/',
    githubLink: 'https://github.com/Kanakendu2827',
    cta: 'View Live',
  },
  {
    icon: '🛂',
    title: 'Passport Photo Generator',
    description:
      'An online passport-photo generator with cropping, background handling, and print-ready layouts.',
    features: ['React', 'Tailwind CSS', 'Image processing', 'Vercel'],
    liveLink: 'https://passport-photo-pi.vercel.app/',
    githubLink: 'https://github.com/Kanakendu2827/Passport-Photo',
    cta: 'View Live',
  },
]

export const Work = () => {
  return (
    <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projects</p>
        <h2 className="mt-3 text-4xl font-bold text-white">My projects</h2>
        <p className="mt-3 max-w-2xl text-slate-400 mx-auto">
          Add the projects you built below, along with links, descriptions, and the technologies you used.
        </p>
      </div>

      {projectItems.length ? (
        <div className="grid gap-6 lg:grid-cols-1">
          {projectItems.map((project, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-slate-900/90"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="flex items-center gap-3 text-2xl font-semibold text-white">
                    {project.icon ? (
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                        {project.icon}
                      </span>
                    ) : null}
                    {project.title}
                  </h3>
                  <p className="mt-3 text-slate-300">{project.description}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
                  Project
                </span>
              </div>

              {project.features?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              ) : null}

              {(project.liveLink || project.githubLink) ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.cta || 'Live Site'}
                    </a>
                  ) : null}

                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-200"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View GitHub
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-white/20 bg-slate-900/60 p-12 text-center text-slate-400">
          <p className="text-xl font-semibold text-white">Your projects will appear here.</p>
          <p className="mt-3 max-w-xl mx-auto text-sm leading-7">
            Open <span className="text-cyan-300">src/components/Work/Work.jsx</span> and add your own project objects inside the <span className="text-cyan-300">projectItems</span> array.
          </p>
        </div>
      )}
    </div>
  )
}

export default Work
