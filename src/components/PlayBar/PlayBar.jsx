import React from "react";
import styles from "./PlayBar.module.css";
import IconSizeBigger from "../../shared/IconSizeBigger";
function PlayBar() {
  return (
    <div className={styles["playBar-container"]}>
      <div className="musicInfo" style={{display:"flex",alignItems:'center'}}>
        <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/4/27/img6027-16826061072631364981444.jpg" />
        <div style={{marginLeft:'20px',marginRight:'20px'}}>
          <p style={{fontWeight:600}}>MAKING MY WAY</p>
          <p style={{fontSize:'14px'}}>Sơn Tùng - MTP</p>
        </div>
        <IconSizeBigger className="fa-regular fa-heart" size="25px"  />
      </div>
      <div style={{display:'flex',gap:'30px',alignItems:'center'}}> 
      <IconSizeBigger className="fa-solid fa-shuffle" size="20px" />
      <div  style={{display:'flex',gap:'30px',alignItems:'center',margin:'0 50px'}}>
      <IconSizeBigger className="fa-solid fa-backward-step" size="25px" />
      <IconSizeBigger className="fa-solid fa-circle-play" size="35px" color="#FACD66" />
      <IconSizeBigger className="fa-solid fa-forward-step" size="25px" />
      </div>
      <IconSizeBigger className="fa-solid fa-repeat" size="20px" />
      </div>
      <div style={{display:'flex',gap:'30px',alignItems:'center'}}>
      <IconSizeBigger className="fa-solid fa-volume-high" size="20px" />
      <IconSizeBigger className="fa-solid fa-list" size="20px" />
      </div>
    </div>
  );
}

export default PlayBar;
