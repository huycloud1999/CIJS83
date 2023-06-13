import React, { useEffect, useState } from 'react';
import styles from './UserBar.module.css';
import Icon from '../../../shared/Icon';
import { useNavigate } from 'react-router-dom';

function UserBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleSignIN = () => {
    navigate('/signin');
  };

  const handleSignUP = () => {
    navigate('/signup');
  };

  const handleLogOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  if (user) {
    return (
      <div className={styles.userBar}>
       <img src={user.userAvatar} alt="" style={{width:50,height:50,borderRadius:'50%'}} />
       <span>{user.userEmail}</span>
        <button className={styles.interactBtn1} onClick={handleLogOut}>Log Out</button>
      </div>
    );
  }

  return (
    <div className={styles.userBar}>
      <button className={styles.userBtn}>
        <Icon>
          <i
            class="fa-sharp fa-solid fa-user"
            aria-hidden="true"
            style={{ fontSize: 24 }}
          ></i>
        </Icon>
      </button>
      <button className={styles.interactBtn1} onClick={handleSignIN}>
        Sign In
      </button>
      <button className={styles.interactBtn2} onClick={handleSignUP}>
        Sign Up
      </button>
    </div>
  );
}

export default UserBar;
