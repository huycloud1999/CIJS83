import React from 'react'
import styles from "./Navbar.module.css"
import Logo from '../image/logo.jpg'
import Icon from '../../shared/Icon'
import { useNavigate, NavLink } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={styles["navbar-container"]}>
      <NavLink to="/home" className="nav-link" style={{ textDecoration: 'none' }} >
        <div style={{
          color: 'var(--body_color)',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 40,
          fontSize: 32,
          marginBottom: 40
        }}>
          {/* <img src={Logo} alt=""
            style={{
              maxWidth: '100%',
              width: '60%',
              marginLeft: '24px',
            }}
          /> */}
          <i class="fa-solid fa-music"></i>
        </div>
      </NavLink>
      <div>
        <ul style={{ color: 'var(--body_color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <li>
            <NavLink to="/home" className="nav-link" style={{ textDecoration: 'none' }} >
              <i style={{ color: 'var(--body_color)' }} class="fa-solid fa-house-chimney"></i>
              <span style={{ color: 'var(--body_color)' }}>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/artists" className="nav-link" style={{ textDecoration: 'none' }}>
              <i style={{ color: 'var(--body_color)' }} class="fa-brands fa-napster"></i>
              <span style={{ color: 'var(--body_color)' }}>Artists</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/library" className="nav-link" style={{ textDecoration: 'none' }} >
              <i style={{ color: 'var(--body_color)' }} class="fa-solid fa-record-vinyl"></i>
              <span style={{ color: 'var(--body_color)' }}>Library</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/podcast" className="nav-link" style={{ textDecoration: 'none' }}>
              <i style={{ color: 'var(--body_color)' }} class="fa-solid fa-radio"></i>
              <span style={{ color: 'var(--body_color)' }}>Podcast</span>
            </NavLink>
          </li>
        </ul>

        <div className={styles.changeThemeBtn}>
          <DarkMode />
        </div>

      </div>

    </div>
  )
}

export default Navbar