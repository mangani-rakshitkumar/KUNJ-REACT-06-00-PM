import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">🎬 MOVIE ZONE</div>
      <ul>
        <li><Link to="/">MOVIES</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar