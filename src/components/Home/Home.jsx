import React from "react";
import styles from './Home.module.css';
import JazzAlbum from '../image/jazzalbum.jpg';
import Icon from '../../shared/Icon';
import TopAlbum from "./TopAlbum";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import NewReleaseCard from "./NewReleaseCard";
import Image from 'react-bootstrap/Image'
import { MusicContext } from "../../MusicContext";
import ItemOfList from '../Playlist/ItemList/ItemOfList';


function Home() {

  return (

    <div style={{
      padding: '30px',
      paddingBottom: '5%',
      backgroundColor: 'var(--body_background)',
      color: 'var(--body_color)',
    }}>
      <div style={{ height: '100%', display: 'flex' }}>
        <div style={{ width: '50%', cursor: 'pointer' }}>
          <Image
            src={JazzAlbum}
            fluid
            width='100%'
          />
        </div>
        <div style={{
          paddingLeft: 32,
          width: '50%'
        }}>
          <h2 style={{ paddingLeft: 36, margin: 0, color: 'var(--body_color)' }}>Top Albums</h2>
          <div style={{ marginTop: 12 }}>
            <TopAlbum />
          </div>
        </div>
      </div>

      <div className={styles.newRelease}>
        <h2 style={{ marginTop: 24, marginBottom: 12 }}>New Releases</h2>
        <div className={styles.musicContainer}>
          <NewReleaseCard />
        </div>
      </div>
      <div className={styles.newRelease}>
        <h2 style={{ marginTop: 24, marginBottom: 12 }}>Hip to the Hop</h2>
        <div className={styles.musicContainer}>
          <NewReleaseCard />
        </div>
      </div>
      <div className={styles.newRelease}>
        <h2 style={{ marginTop: 24, marginBottom: 12 }}>Recommend for you</h2>
        <div className={styles.musicContainer}>
          <NewReleaseCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
