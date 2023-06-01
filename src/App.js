import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import CarListing from "./components/pages/Carlisting";
import Blog from "./components/pages/Blog";
import AboutUs from "./components/pages/AboutUs";
import Lamborghini from "./components/pages/Lamborghini";
import Ferrari from "./components/pages/Ferrari";
import Tesla from "./components/pages/Tesla";
import Lexus from "./components/pages/Lexus";
import "./App.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="car-listing" exact element={<CarListing />} />
        <Route path="blog" exact element={<Blog />} />
        <Route path="about-us" exact element={<AboutUs />} />
        <Route path="lamborghini" exact element={<Lamborghini />} />
        <Route path="ferrari" exact element={<Ferrari />} />
        <Route path="tesla" exact element={<Tesla />} />
        <Route path="lexus" exact element={<Lexus />} />
      </Routes>
    </Router>
  );
}

export default App;
