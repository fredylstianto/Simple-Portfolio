import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Loader from "./components/Loader";
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader appears for 2s
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MyNavbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
        </div>
      )}
    </>
  );
}
