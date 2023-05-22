import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from './Library.module.css'

function Library() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/playlist')
  }
  return (
    <div>
      <h1>Your Library</h1>
      {/* <button onClick={handleClick}>chill</button> */}
      <div className={styles.libraryContainer}>

        <div className={styles.libraryItem}>
          <div>
            <div className={styles.yourMusics}>
              <button className={styles.playBtn}>
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
          <h3>Liked Songs</h3>
        </div>

        <div className={styles.libraryItem}>
          <div>
            <div className={styles.yourAlbums}>
              <button className={styles.playBtn}>
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
            <h3>Saved Albums</h3>
          </div>
        </div>

        <div className={styles.libraryItem}>
          <div>
            <div className={styles.yourPodcasts}>
              <button className={styles.playBtn}>
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
            <h3>Saved Podcasts</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library