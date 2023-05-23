import React from 'react'
import BongHoa from '../image/bonghoa.jpg'
import styles from './Home.module.css'

function NewReleaseCard() {
    return (
        <div className={styles.newReleaseCard}>
            <img src={BongHoa} alt="" style={{ width: '90%', borderRadius: 16 }} />
            <button className={styles.bigPlayBtn}>
                <i style={{ color: '#ffffff', fontSize: 20 }} class="fa-solid fa-play"></i>
            </button>
            <h4>Bông Hoa Tệ Nhất</h4>
        </div>
    )
}

export default NewReleaseCard