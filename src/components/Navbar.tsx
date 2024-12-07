import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold">Home</Link>
        <Link to="/login" className='text-white'>Login</Link>
        <Link to="/contact" className='text-white'>Contact</Link>
        <Link to="/cart" className="text-white">Cart</Link>
      </div>
    </nav>
  );    
};  

export default Navbar;
