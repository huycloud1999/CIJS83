import React from 'react'
import BongHoa from '../image/bonghoa.jpg'
import styles from './Home.module.css'
import Icon from '../../shared/Icon'

function TopAlbum() {
    return (
        <div className={styles.topAlbums}>
            <div className={styles.topAlbumsImg}>
                <img
                    src={BongHoa} alt=""
                    style={{
                        width: '15%',
                        height: 'auto',
                        borderRadius: 8
                    }}
                />
                <button className={styles.playBtn}>
                    <i style={{ color: '#ffffff' }} class="fa-solid fa-play"></i>
                </button>
                <div className={styles.topAlbumsInfo}>
                    <h4>Bông Hoa Tệ Nhất</h4>
                    <p>1337</p>
                    <p>3:20:51</p>
                </div>
            </div>
            <div>
                <button className={styles.likeBtn}>
                    <Icon><i class="fa-regular fa-heart" style={{ fontSize: 28 }}></i></Icon>
                </button>
            </div>
        </div>
    )
}

export default TopAlbum