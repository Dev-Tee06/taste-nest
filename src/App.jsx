import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar";
import { Mobilemenu } from "./Components/Mobilemenu";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Review from "./Components/Review";
import Blog from "./Components/Blog";
import Order from "./Components/Order";
import FAQ from "./Components/FAQ";
import { CartProvider } from "./Components/CartContext";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Mobilemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Review />
                <FAQ />
                <Contact />
              </>
            }
          />

          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
