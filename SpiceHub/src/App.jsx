import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./sections/NavBar";
import Banner from "./sections/Banner";
import Hero from "./sections/Hero";
import Mid from "./sections/Mid";
import Products from "./sections/Products";
import Cart from "./sections/Cart";
import Footer from './sections/Footer'

const App = () => {
  return (
    <BrowserRouter>
      
      <NavBar />
       
      {/* Page Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Hero />

              <Mid />
              <Products />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
};

export default App;
