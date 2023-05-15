import React from 'react'
import styles from './Navbar.module.css'
import Icon from '../../shared/Icon'

function Navbar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Logo}>
        Logo
      </div>
      <div className={styles.NavIcons}>
        <button className={styles.NavBtn}>
        <Icon><i class="fa-solid fa-house" aria-hidden='true' style={{ fontSize: 24 }}></i></Icon>
        </button>
        <button className={styles.NavBtn}>
        <Icon><i class="fa-solid fa-record-vinyl" aria-hidden='true' style={{ fontSize: 24 }}></i></Icon>
        </button>
        <button className={styles.NavBtn}>
        <Icon><i class="fa-solid fa-user-secret" aria-hidden='true' style={{ fontSize: 24 }}></i></Icon>
        </button>
        <button className={styles.NavBtn}>
        <Icon><i class="fa-solid fa-radio" aria-hidden='true' style={{ fontSize: 24 }}></i></Icon>
        </button>
      </div>
    </div>
  )
}

export default Navbar