import React from 'react'
import './navbar.css';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="afi__navbar">
      <div className='afi__navbar--links'>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/create">Create Advertisement</Link></p>
        <p><Link to="/feed">Advertisements</Link></p>
        <p><Link to="/subscribers">Subscribers</Link></p>
      </div>
    </div>
  );
}

export default Navbar