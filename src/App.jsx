import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import Edu from "./components/Education/Edu";
import ContactPage from "./pages/ContactPage";
import heroImage from "./assets/hero.png";

const Home = () => (
  <>
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="mb-10 flex items-center justify-center">
        <img
          src={heroImage}
          alt="Kanakendu Das"
          className="h-65 w-65 rounded-full object-cover border-4 border-cyan-500/20 shadow-2xl shadow-cyan-500/20"
        />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Kanakendu Das
        </span>
      </h1>

      <div className="mt-6 text-xl md:text-3xl font-medium text-gray-300 h-12 flex items-center justify-center">
        <TypeAnimation
          sequence={[
            "React Developer",
            2000,
            "UI Developer",
            2000,
            "Full Stack Developer",
            2000,
            "Python Developer",
            2000,
            "Ai Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </div>

      <p className="mt-4 max-w-2xl text-gray-400 text-sm md:text-lg">
        Passionate about building modern, responsive, and user-friendly web
        applications with React, JavaScript, and modern UI technologies.
      </p>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a
          href="/#work"
          className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-500/30"
        >
          View Projects
        </a>

        <Link
          to="/contact"
          className="px-6 py-3 rounded-lg border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
        >
          Contact Me
        </Link>

        <a
          href="/Kanakendu_Das_CV.pdf"
          download
          className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition duration-300 shadow-lg shadow-cyan-500/30"
        >
          Download CV
        </a>
      </div>
    </section>

    <section id="about" className="py-24 px-4">
      <About />
    </section>

    <section id="skills" className="py-24 px-4">
      <Skills />
    </section>

    <section id="work" className="py-24 px-4">
      <Work />
    </section>

    <section id="education" className="py-24 px-4">
      <Edu />
    </section>

    <Footer />
  </>
);

function App() {
  return (
    <div className="relative min-h-screen bg-slate-100 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-cyan-500/10 dark:from-purple-900/10 dark:to-cyan-900/10" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;