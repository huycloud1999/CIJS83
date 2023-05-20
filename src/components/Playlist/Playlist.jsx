import React from "react";
import styles from "./Playlist.module.css";
import IconSizeBigger from "../../shared/IconSizeBigger";
import ItemOfList from "./ItemList/ItemOfList";

function Playlist() {
  return (
    <div className={styles["playlist"]}>
      <div className={styles["headerPlaylist"]}>
        <img
          src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/4/27/img6027-16826061072631364981444.jpg"
          alt=""
        />
        <div>
          <h4>Playlist</h4>
          <h1>G-Dragon VietNam</h1>
          <p>
            Những bản nhạc hay nhất của kẻ hủy diệt âm nhạc G-dragon VietNam
          </p>
          <p>7,041,414 likes,304 songs, about 11 hr</p>
        </div>
      </div>
      <div className={styles["playlistButton"]}>
        <i class="fa-solid fa-circle-play"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <div className="contentSpacing" >
      
          <div className={styles["tableList"]}>
            <div className="gridItem">#</div>
            <div className="gridItem">Title</div>
            <div className="gridItem">Album</div>
            <div className="gridItem">Date added</div>
            <div className="gridItem"><i class="fa-regular fa-clock" style={{fontSize:'14px',color:'black'}}></i></div>
        </div>
        <div className={styles["ListItem"]}>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        <ItemOfList/>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Playlist;
