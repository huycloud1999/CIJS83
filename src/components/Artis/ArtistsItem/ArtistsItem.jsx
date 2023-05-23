import React from 'react'
import styles from './ArtistsItem.module.css'
import { useNavigate } from 'react-router-dom'

function ArtistsItem() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/playlist")
  };
  
  return (
    <div className={styles['artistsItem']} onClick={handleclick}>
      <div className={styles['artistsItemImg']}>
        <img src="https://images2.thanhnien.vn/Uploaded/caotung/2020_12_30/photo-1-16092554908561278237856_GFAT.jpg?width=500" alt="" />
        <i class="fa-solid fa-circle-play"></i>
      </div>
      <span>G-Dragon</span>
    </div>

  )
}

export default ArtistsItem