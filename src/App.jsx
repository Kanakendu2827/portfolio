import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Edu from "./components/Education/Edu";

function App() {
  return (
    <div className="bg-red-500">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,4f4f4f2e_1px),linear-gradient(to_bottom,4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(elipse_60%_50%_at_50%_0%_000_70%,transparent_100%,transparent_100%)]"></div>
      <div className="relative pt-20">
        <Navbar  />
        <Skills />
        <Work />
        <Edu />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;