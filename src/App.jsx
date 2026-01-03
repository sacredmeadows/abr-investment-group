import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Sellers from "./pages/Sellers.jsx";
import Buyers from "./pages/Buyers.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Thanks from "./pages/Thanks.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-ink-900 px-4 py-2 rounded-xl shadow-soft"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}