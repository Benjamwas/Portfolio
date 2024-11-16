import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./constants/Projects";
import Contact from "./Components/Contact";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div
            className="h-screen w-full text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 overflow-x-hidden"
            style={{
                background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
            }}
        >
    <NavBar />
    <Hero />
    <About />
    <Technologies />
    <Projects />
    <Contact />
    
    </div>
    </div>
    
    
    
  

    
  );
};
export default App