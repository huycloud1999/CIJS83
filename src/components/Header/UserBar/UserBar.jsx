import React from 'react'
import styles from './UserBar.module.css'
import Icon from '../../../shared/Icon'
import { useNavigate } from 'react-router-dom';

function UserBar() {
    const navigate = useNavigate();
    const handleSignIN =()=>{
        
        navigate('/Signin')
    }
    return (
        <div className={styles.userBar}>
            <button className={styles.userBtn}>
                <Icon><i class="fa-sharp fa-solid fa-user" aria-hidden='true' style={{ fontSize: 24 }}></i></Icon>
            </button>
            <button className={styles.interactBtn1} onClick={handleSignIN}>Sign In</button>
            <button className={styles.interactBtn2}>Sign Up</button>
        </div>
    )
}

export default UserBar