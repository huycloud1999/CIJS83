import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import Logo from '../image/logo.jpg';
import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={styles["navbar-container"]}>
      <NavLink to="/home" className="nav-link" style={{ textDecoration: 'none', listStyleType: 'none' }}>
        <div style={{
          marginTop: 20,
          fontSize: 40,
          color: 'var(--button_color)',
          marginBottom: 60
        }}>
          <i class="fa-solid fa-music"></i>
          {/* <img
            src={Logo}
            alt=""
            style={{
              maxWidth: '100%',
              width: '60%',
              marginLeft: '24px',
            }}
          /> */}
        </div>
      </NavLink >
      <div>
        <ul style={{ listStyleType: 'none' }}>
          <NavItem
            to="/home"
            icon="fa-house-chimney"
            text="Home"
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
          />
          <NavItem
            to="/artists"
            icon="fa-brands fa-napster"
            text="Artists"
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
          />
          <NavItem
            to="/library"
            icon="fa-record-vinyl"
            text="Library"
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
          />
          <NavItem
            to="/podcast"
            icon="fa-radio"
            text="Podcast"
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
          />
          <div style={{ marginTop: 200 }}>
            <DarkMode />
          </div>
        </ul>
      </div>
    </div >
  );
};

const NavItem = ({ to, icon, text, activeLink, handleLinkClick }) => {
  const isActive = activeLink === to;

  return (
    <li>
      <NavLink
        to={to}
        className={`nav-link ${isActive ? styles.active : ''}`}
        style={{ textDecoration: 'none' }}
        onClick={() => handleLinkClick(to)}
      >
        <i className={`fa-solid ${icon} ${styles.icon}`}></i>
        <span className={styles.text}>{text}</span>
      </NavLink>
    </li>
  );
};

export default Navbar;