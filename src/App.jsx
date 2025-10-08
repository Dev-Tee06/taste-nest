import React from "react";
import { Navbar } from "./Components/Navbar";
import { Mobilemenu } from "./Components/Mobilemenu";
import { useState } from "react";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Typewriter from "./Components/Typewriter";
import CartProvider from "./Components/CartContext";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Mobilemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Menu />
      <Contact />
      <Footer />
      <Typewriter />
      <CartProvider />
    </div>
  );
}

export default App;
