import React from 'react'
import styles from "./Navbar.module.css"
import Logo from '../image/logo.jpg'
import Icon from '../../shared/Icon'
import { useNavigate, NavLink } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={styles["navbar-container"]}>
      <div >
        <img src={Logo} alt=""
          style={{ 
            maxWidth: '100%', 
            width: '60%',
            marginLeft: '24px',
            cursor:'pointer' 
          } }  onClick={() => navigate("/home")}
        />
      </div>
      <div>
      <ul>
        <li>
          <NavLink to="/home" className="nav-link" style={{textDecoration:'none'}} >
          <i class="fa-solid fa-house-chimney"></i>
          <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/artists" className="nav-link" style={{textDecoration:'none'}}>
          <i class="fa-brands fa-napster"></i>
          <span>Artists</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" className="nav-link" style={{textDecoration:'none'}} >
          <i class="fa-solid fa-record-vinyl"></i>
          <span>Library</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/podcast" className="nav-link" style={{textDecoration:'none'}}>
          <i class="fa-solid fa-radio"></i>
          <span>Podcast</span>
          </NavLink>
        </li>
      </ul>
      </div>

    </div>
  )
}

export default Navbar