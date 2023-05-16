import React from 'react'
import styles from "./Navbar.module.css"
import Icon from '../../shared/Icon'
import { useNavigate, NavLink } from 'react-router-dom';
function Navbar() {


  return (
    <div className={styles["navbar-container"]}>
      <div >
        <img  src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30144742/417.png" alt=""style={{maxWidth:'100%',width:'100%'}}/>
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
          <span>Postcasst</span>
          </NavLink>
        </li>
      </ul>
      </div>
      
    </div>
  )
}

export default Navbar