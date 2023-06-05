import React, { useState, useEffect } from 'react'
import BongHoa from '../image/bonghoa.jpg'
import styles from './Home.module.css'
import Icon from '../../shared/Icon'
import { Image } from 'react-bootstrap'

async function fetchData() {
    try {
        const response = await fetch('https://646cd1e27b42c06c3b2c16a8.mockapi.io/albums');
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            throw new Error(data);
        };
    } catch (error) {
        console.error('Error:', error);
        return [];
    };
};

function TopAlbum() {
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const data = await fetchData();
            setAlbumData(data);
        };

        fetchDataFromAPI();
    }, []);


    return (
        <div className={styles.topAlbums}>
            {albumData.map((item) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div className={styles.topAlbumsImg}>
                        <Image
                            src={item.image}
                            fluid
                            style={{
                                width: '120px',
                                height: '100px',
                                borderRadius: 8
                            }}
                        />
                        <button className={styles.playBtn}>
                            <i style={{ color: '#ffffff', fontSize: 16 }} class="fa-solid fa-play"></i>
                        </button>
                        <div className={styles.topAlbumsInfo}>
                            <h3>{item.name}</h3>
                            <p>{item.author}</p>
                            <p>{item.length}</p>
                        </div>
                    </div>
                    <div>
                        <button className={styles.likeBtn}>
                            <Icon><i class="fa-regular fa-heart" style={{ fontSize: 28 }}></i></Icon>
                        </button>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default TopAlbum