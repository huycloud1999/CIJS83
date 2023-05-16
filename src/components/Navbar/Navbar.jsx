import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
function Navbar() {


  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/artists" className="nav-link">
            Artists
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" className="nav-link">
            Library
          </NavLink>
        </li>
        <li>
          <NavLink to="/podcast" className="nav-link">
            Podcast
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar