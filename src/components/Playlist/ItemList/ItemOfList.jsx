import React from 'react';
import styles from './ItemOfList.module.css';
import { useContext } from 'react';

function ItemOfList({ ordinalNumber, imgMusic, nameMusic, nameArt, nameAlbum, dateAdd, time, onItemClick, linkMp3, isActive }) {

  const handleClick = () => {
    const song = {
      ordinalNumber,
      imgMusic,
      nameMusic,
      nameArt,
      nameAlbum,
      dateAdd,
      time,
      linkMp3
    };
    onItemClick(song);
  };

  const itemClass = `${styles.ItemList} ${isActive ? styles.active : ''}`;

  return (
    <div className={itemClass} onClick={handleClick}>
      <div className={styles.gridItem}>
        <span className={styles.ordinalNumber}>{ordinalNumber}</span>
        <i className="fa-solid fa-play"></i>
      </div>
      <div className={styles.gridItem}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={imgMusic} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', rowGap: '5px', paddingLeft: '10px' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{nameMusic}</span>
            <span style={{ fontSize: '14px', color: '#ccc' }}>{nameArt}</span>
          </div>
        </div>
      </div>
      <div className={styles.gridItem}>{nameAlbum}</div>
      <div className={styles.gridItem}>{dateAdd}</div>
      <div className={styles.gridItem}>{time}</div>
    </div>
  );
}

export default ItemOfList;
