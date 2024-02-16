import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageTransition } from '@steveeeie/react-page-transition';
import './App.css';



function App() {
  const location = useLocation();

  return (
    <>
      <Header />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
