import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { Image } from 'react-bootstrap';

async function fetchData() {
    try {
        const response = await fetch('https://646cd1e27b42c06c3b2c16a8.mockapi.io/music');
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

function NewReleaseCard() {
    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const data = await fetchData();
            setMusicData(data);
        };

        fetchDataFromAPI();
    }, []);

    return (
        <div style={{ display: 'flex', gap: 32 }}>
            {musicData.map((item) => (
                <div className={styles.newReleaseCard} key={item.id}>
                    {/* <img src={item.image} alt="" style={{ width: '100%', borderRadius: 16, overflow: 'hidden', display: 'block' }} /> */}
                    <div style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: 16,
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Image src={item.image} fluid />
                    </div>
                    <button className={styles.bigPlayBtn}>
                        <i style={{ color: '#ffffff', fontSize: 24 }} className="fa-solid fa-play"></i>
                    </button>
                    <div className={styles.title}>
                        <h4>{item.title}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewReleaseCard;
