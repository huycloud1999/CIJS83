import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { Image } from 'react-bootstrap';
import { MusicContext } from '../../MusicContext';
import ItemOfList from '../Playlist/ItemList/ItemOfList';
import { useContext } from 'react';

async function fetchData() {
    try {
        const response = await fetch('https://64565c5d2e41ccf1691ad253.mockapi.io/recommend');
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

function NewReleaseCard3() {
    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const data = await fetchData();
            setMusicData(data);
        };

        fetchDataFromAPI();
    }, []);

    const { setCurrentSong } = useContext(MusicContext);

    const handlePlayMusic = (item) => {
        console.log(item);
        setCurrentSong(item);
    };

    return (
        <div style={{ display: 'flex', gap: 32 }}>
            {musicData.map((item) => (
                <div className={styles.newReleaseCard} key={item.id}>
                    {/* <img src={item.image} alt="" style={{ width: '100%', borderRadius: 16, overflow: 'hidden', display: 'block' }} /> */}
                    <div style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: 16,
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Image src={item.imgMusic} fluid />
                    </div>
                    <button
                        className={styles.bigPlayBtn}
                        onClick={() => handlePlayMusic(item)}
                    >
                        <i style={{ color: '#ffffff', fontSize: 24 }} className="fa-solid fa-play"></i>
                    </button>
                    <div className={styles.title}>
                        <h4>{item.nameMusic}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewReleaseCard3;