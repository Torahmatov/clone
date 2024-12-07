import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Cart from "./components/Cart";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
