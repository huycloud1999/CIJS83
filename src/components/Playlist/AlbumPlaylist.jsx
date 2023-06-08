import React from 'react'
import styles from "./Playlist.module.css";
import IconSizeBigger from "../../shared/IconSizeBigger";
import ItemOfList from './ItemList/ItemOfList';
import { useContext } from "react";
import { MusicContext } from "../../MusicContext";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

function albumsPlaylist() {

    const location = useLocation();
    const albums = location.state;
    const { setCurrentSong } = useContext(MusicContext);
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (song) => {
        setCurrentSong(song);
        setActiveItem(song.ordinalNumber);
    };


    return (
        <div className={styles["playlist"]}>
            <div className={styles["headerPlaylist"]}>
                <img src={albums.imgArt} alt="" />
                <div>
                    <h4>Playlist</h4>
                    <h1>{albums.nameArt}</h1>
                    <p>
                        Những bản nhạc hay nhất của kẻ hủy diệt âm nhạc {albums.nameArt}
                    </p>
                    {/* <p>
                        {totalSongs} songs, about {formatDuration(totalDuration)}
                    </p> */}
                </div>
            </div>
            <div className={styles["playlistButton"]}>
                <i class="fa-solid fa-circle-play" style={{ color: '#7f5af0' }}></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div className="contentSpacing">
                <div className={styles["tableList"]}>
                    <div className="gridalbums">No.</div>
                    <div className="gridalbums">Title</div>
                    <div className="gridalbums">albums</div>
                    <div className="gridalbums">Date added</div>
                    <div className="gridalbums">
                        <i
                            class="fa-regular fa-clock"
                            style={{ fontSize: "20px", color: "#ffffff" }}
                        ></i>
                    </div>
                </div>
                <div className={styles.Listalbums}>
                    {Object.entries(albums.playList).map(([songKey, song]) => (
                        <albumsOfList
                            key={songKey}
                            ordinalNumber={songKey.substring(4)}
                            imgMusic={song.imgMusic}
                            nameMusic={song.nameMusic}
                            nameArt={albums.nameArt}
                            namealbums={song.namealbums}
                            dateAdd={song.dateAdd}
                            time={song.time}
                            linkMp3={song.linkMp3}
                            isActive={activealbums === songKey.substring(4)}
                        // onalbumsClick={handlealbumsClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default albumsPlaylist