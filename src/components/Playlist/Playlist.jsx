import React from "react";
import styles from "./Playlist.module.css";
import IconSizeBigger from "../../shared/IconSizeBigger";
import ItemOfList from "./ItemList/ItemOfList";
import { useContext } from "react";
import { MusicContext } from "../../MusicContext";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
function Playlist() {

  const location = useLocation();
  const artist = location.state;
  const { setCurrentSong } = useContext(MusicContext);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (song) => {
    setCurrentSong(song);
    setActiveItem(song.ordinalNumber);
  };

  function convertTimeToSeconds(time) {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  function formatDuration(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    return `${hours} hr ${minutes} min`;
  };

  // Calculate the total number of songs
  const totalSongs = Object.keys(artist.playList).length;

  // Calculate the total duration of the playlist
  const totalDuration = Object.values(artist.playList).reduce(
    (total, song) => total + convertTimeToSeconds(song.time),
    0
  );

  return (
    <div className={styles["playlist"]}>
      <div className={styles["headerPlaylist"]}>
        <img src={artist.imgArt} alt="" />
        <div>
          <h1>{artist.nameArt}</h1>
          <p>
            Những bản nhạc hay nhất của kẻ hủy diệt âm nhạc {artist.nameArt}
          </p>
          <p>
            {totalSongs} songs, about {formatDuration(totalDuration)}
          </p>
        </div>
      </div>
      <div className={styles["playlistButton"]}>
        <i class="fa-solid fa-circle-play" style={{ color: 'var(--button_color)' }}></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <div className="contentSpacing">
        <div className={styles["tableList"]}>
          <div className="gridItem">No.</div>
          <div className="gridItem">Title</div>
          <div className="gridItem">Album</div>
          <div className="gridItem">Date added</div>
          <div className="gridItem">
            <i
              class="fa-regular fa-clock"
              style={{ fontSize: "20px", color: "#ffffff" }}
            ></i>
          </div>
        </div>
        <div className={styles.ListItem}>
          {Object.entries(artist.playList).map(([songKey, song]) => (
            <ItemOfList
              key={songKey}
              ordinalNumber={songKey.substring(4)}
              imgMusic={song.imgMusic}
              nameMusic={song.nameMusic}
              nameArt={artist.nameArt}
              nameAlbum={song.nameAlbum}
              dateAdd={song.dateAdd}
              time={song.time}
              linkMp3={song.linkMp3}
              isActive={activeItem === songKey.substring(4)}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
