import React from "react";
import styles from './PodcastItem.module.css'

function PodcastItem({ podcast }) {
  return (
    <div className={styles.PIContainer}>
      <img src={podcast.imgMusic}  />
      <div className={styles.PIContent}>
        <h4 title={podcast.nameMusic}>{podcast.nameMusic}</h4>
        <span>{podcast.artPost}</span>
      </div>
      <i className="fa-solid fa-circle-play"></i>
    </div>
  );
}

export default PodcastItem;
