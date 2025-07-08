import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">🌱 TREE_MOUNTAIN_RIVER_WEBSITE</div>
      <div className="links">
        <Link to="/">TREE</Link>
        <Link to="/about">MOUNTAIN</Link>
        <Link to="/contact">RIVER</Link>
      </div>
    </nav>
  );
};

export default Navbar;