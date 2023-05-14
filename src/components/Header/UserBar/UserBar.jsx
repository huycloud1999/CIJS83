import React from 'react'
import styles from './UserBar.module.css'
import Icon from '../../../shared/Icon'

function UserBar() {
    return (
        <div className={styles.userBar}>
            <button className={styles.userBtn}>
                <Icon><i class="fa-sharp fa-solid fa-user" aria-hidden='true' style={{ fontSize: 24 }}></i></Icon>
            </button>
            <button className={styles.interactBtn1}>Sign In</button>
            <button className={styles.interactBtn2}>Sign Out</button>
        </div>
    )
}

export default UserBar