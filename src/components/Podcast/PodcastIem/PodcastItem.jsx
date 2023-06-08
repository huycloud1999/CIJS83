import React from "react";
import styles from './PodcastItem.module.css'
function PodcastItem() {
    
  return (
    <div className={styles.PIContainer}>
      <img
        src="https://upload.wikimedia.org/wikipedia/vi/thumb/c/c1/Nh%C3%A2n_v%E1%BA%ADt_v%E1%BA%BD_theo_phong_c%C3%A1ch_anime_-_manga_%C4%91%C6%B0%E1%BB%A3c_t%E1%BA%A1o_t%E1%BB%B1_%C4%91%E1%BB%99ng_b%E1%BB%9Fi_AI_%282%29.jpeg/640px-Nh%C3%A2n_v%E1%BA%ADt_v%E1%BA%BD_theo_phong_c%C3%A1ch_anime_-_manga_%C4%91%C6%B0%E1%BB%A3c_t%E1%BA%A1o_t%E1%BB%B1_%C4%91%E1%BB%99ng_b%E1%BB%9Fi_AI_%282%29.jpeg"
        alt=""
      />
      <div className={styles.PIContent}>
      <h4>Thật vui khi làm wibu,wibu never sai</h4>
      <span>Hiếu thứ hight</span>
      </div>
      <i class="fa-solid fa-circle-play"></i>
    </div>
  );
}

export default PodcastItem;
