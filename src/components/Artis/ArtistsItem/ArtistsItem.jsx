import React from 'react';
import styles from './ArtistsItem.module.css';
import { useNavigate } from 'react-router-dom';

function ArtistsItem({ artist }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/playlist", { state: artist });
  };

  return (
    <div className={styles.artistsItem} onClick={handleClick}>
      <div className={styles.artistsItemImg}>
        <img src={artist.imgArt} alt={artist.nameArt} />
        <i className="fa-solid fa-circle-play"></i>
      </div>
      <span style={{textTransform:'capitalize'}}>{artist.nameArt}</span>
    </div>
  );
}

export default ArtistsItem;
