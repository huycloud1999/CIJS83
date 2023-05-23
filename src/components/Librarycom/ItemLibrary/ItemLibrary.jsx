import React from 'react'
import styles from "./ItemLibrary.module.css"
import { useNavigate } from 'react-router-dom'

function ItemLibrary() {
  const navigate = useNavigate();
  function handleclick(){
      navigate('/playlist')
  }
  return (

    <div className={styles['itemlibrary']} onClick={handleclick} >
        <img src="https://e1.pxfuel.com/desktop-wallpaper/103/765/desktop-wallpaper-phone-celular-simple-heart-symbol-black-backgrounds-background-black-c.jpg" alt="" />
     
        <h4>Liked Song</h4>
        <p>by Huypro9x</p>
        <span>123 songs</span>
        <i class="fa-solid fa-circle-play"></i>
        
    </div>
  )
}

export default ItemLibrary