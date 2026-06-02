import React from 'react'
import { SiPython, SiJavascript, SiReact, SiDart, SiRuby, SiCplusplus } from 'react-icons/si'
import { DiProlog, DiJava } from 'react-icons/di'
import { TbBrandCSharp } from 'react-icons/tb'

const skillItems = [
  { icon: <SiPython className="text-cyan-400" />, name: 'Python' },
  { icon: <DiJava className="text-red-500" />, name: 'Java' },
  { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <SiReact className="text-cyan-400" />, name: 'React' },
  { icon: <SiDart className="text-blue-400" />, name: 'Dart' },
  { icon: <SiRuby className="text-rose-500" />, name: 'Ruby' },
  { icon: <TbBrandCSharp className="text-blue-500" />, name: 'C#' },
  { icon: <SiCplusplus className="text-slate-300" />, name: 'C++' },
  { icon: <DiProlog className="text-violet-400" />, name: 'Prolog' },
]

export const Skills = () => {
  return (
    <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
      <div className="mb-8 text-center">
        <p className="text-lg uppercase tracking-[0.3em] text-cyan-300">Skills</p>
        <h2 className="mt-3 text-3xl font-bold text-white">Core technologies I work with</h2>
        <p className="mt-3 text-gray-400">
          These are the languages and frameworks I use most frequently in my projects.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillItems.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/80 text-3xl">
              {skill.icon}
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills