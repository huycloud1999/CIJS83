import React from 'react'
import styles from './ArtistsItem.module.css'
import { useNavigate } from 'react-router-dom'
function ArtistsItem() {
  const navigate = useNavigate();
  const handleclick =()=>{
    navigate("/playlist")
  }
  return (
    <div className={styles['artistsItem']} onClick={handleclick}>
        <div className={styles['artistsItemImg']}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIyM270w_qfRBCA_5FsfWjEQ51EMO9YrrwQ&usqp=CAU" alt="" />
        <i class="fa-solid fa-circle-play"></i>
        </div>
        <span>G-Dragon</span>
    </div>

  )
}

export default ArtistsItem