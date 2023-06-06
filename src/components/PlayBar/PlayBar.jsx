import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "./PlayBar.module.css";
import IconSizeBigger from "../../shared/IconSizeBigger";
import { MusicContext } from "../../MusicContext";

function PlayBar() {
  const { currentSong } = useContext(MusicContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [inputWidth, setInputWidth] = useState(400);
  const [volume, setVolume] = useState(1);
  const audioPlayerRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    const audioPlayer = audioPlayerRef.current;

    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  };

  const handleTimeUpdate = (e) => {
    const audioPlayer = e.target;
    setCurrentTime(audioPlayer.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    const audioPlayer = audioPlayerRef.current;
    audioPlayer.currentTime = seekTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    const audioPlayer = audioPlayerRef.current;
    audioPlayer.volume = newVolume;
  };

  useEffect(() => {
    setIsPlaying(true);
    setCurrentTime(0);
    setDuration(0);
  }, [currentSong]);

  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;

    const updateTime = () => {
      setCurrentTime(audioPlayer.currentTime);
      setDuration(audioPlayer.duration);
    };

    if (audioPlayer && currentSong) {
      audioPlayer.addEventListener("timeupdate", updateTime);
      setDuration(audioPlayer.duration);
    }

    return () => {
      if (audioPlayer) {
        audioPlayer.removeEventListener("timeupdate", updateTime);
      }
    };
  }, [currentSong, inputWidth]);

  if (!currentSong) {
    return null;
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const getVolumeIcon = () => {
    if (volume === 0) {
      return "fa-solid fa-volume-xmark";
    } else if (volume < 0.5) {
      return "fa-solid fa-volume-low";
    } else {
      return "fa-solid fa-volume-high";
    }
  };

  return (
    <div className={styles["playBar-container"]}>
      <div
        className="musicInfo"
        style={{ display: "flex", alignItems: "center", width: "400px" }}
      >
        <img src={currentSong.imgMusic} alt="Song Cover" />
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <p className={styles.fixedNameMusic} style={{ fontWeight: 600 }}>
            {currentSong.nameMusic}
          </p>
          <p style={{ fontSize: "14px" }}>{currentSong.nameArt}</p>
        </div>
        <IconSizeBigger className="fa-regular fa-heart" size="25px" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <IconSizeBigger className="fa-solid fa-step-backward" size="25px" />
          {isPlaying ? (
            <IconSizeBigger
              className="fa-solid fa-pause-circle"
              size="35px"
              color="#FACD66"
              onClick={handlePlayPause}
            />
          ) : (
            <IconSizeBigger
              className="fa-solid fa-play-circle"
              size="35px"
              color="#FACD66"
              onClick={handlePlayPause}
            />
          )}
          <IconSizeBigger className="fa-solid fa-step-forward" size="25px" />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <span style={{color:'white'}}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className={styles.inputRange}
            style={{
              width: `${inputWidth}px`,
              margin: "0 10px",
              height: "5px"
            }}
          />

          <span style={{color:'white'}}>{formatTime(duration)}</span>
        </div>
      </div>
      <div className={styles.inputContainer} style={{ width: 200 }}>
        <i
          className={`fa-solid ${getVolumeIcon()}`}
          style={{
            marginRight: "5px",
            fontSize: "20px",
            color: "white",
            width: 20,
          }}
        />
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleVolumeChange}
          className={styles.inputRange}
          style={{ width: "80px", margin: "0 10px",height:'5px' }}
        />
        <i
          className="fa-solid fa-bars"
          style={{
            marginLeft: "10px",
            fontSize: "20px",
            color: "white",
            width: 20
          }}
        ></i>
      </div>
      {currentSong.linkMp3 && (
        <audio
          id="audioPlayer"
          ref={audioPlayerRef}
          src={currentSong.linkMp3}
          autoPlay={isPlaying}
          controls={false}
          loop={false}
          onTimeUpdate={handleTimeUpdate}
        />
      )}
    </div>
  );
}

export default PlayBar;
