import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className="navbar">
         <ul className="nav-list">
            <li className="nav-item">
               <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
               <Link to="/registration">Registration</Link>
            </li>
            <li className="nav-item">
               <Link to="/brands">Brands</Link>
            </li>
            <li className="nav-item">
               <Link to="/contact">Contact</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
