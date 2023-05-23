import React from "react";
import styles from './Home.module.css';
import JazzAlbum from '../image/jazzalbum.jpg';
import Icon from '../../shared/Icon';
import TrungTam from '../image/trungtam.jpg';
import StarBoy from '../image/starboy.jpg';
import BongHoa from '../image/bonghoa.jpg';
import TopAlbum from "./TopAlbum";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NewReleaseCard from "./NewReleaseCard";
import Image from 'react-bootstrap/Image'


function Home() {

  return (

    <div style={{padding:'30px',paddingBottom:'5%'}}>

      <div style={{ height: '100%', display: 'flex' }}>
        <div style={{ width: '50%' }}>
          {/* <img
            src={JazzAlbum}
            alt=""
            style={{
              width: '100%',
            }}
          /> */}
          <Image
            src={JazzAlbum}
            fluid
            width='100%'
          />
        </div>
        <div style={{
          paddingLeft: 32
        }}>

          <h2 style={{ paddingLeft: 36, margin: 0 }}>Top Albums</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
            <TopAlbum />
            <TopAlbum />
            <TopAlbum />
          </div>
        </div>
      </div>

      <div className={styles.newRelease}>
        <h2 style={{ marginTop: 24, marginBottom: 12 }}>New Releases</h2>
        <div style={{ display: "flex", width: "100%", overflowX: "auto", gap: 64, whiteSpace: "nowrap" }}>
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
        </div>
      </div>
      <div className={styles.newRelease}>
        <h2 style={{ marginTop: 24, marginBottom: 12 }}>Hip to the Hop</h2>
        <div style={{ display: "flex", width: "100%", overflowX: "auto", gap: 64, whiteSpace: "nowrap" }}>
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
        </div>
      </div>
      <div className={styles.newRelease}>
        <h2 style={{ marginTop: 24, marginBottom: 12 }}>PoP</h2>
        <div style={{ display: "flex", width: "100%", overflowX: "auto", gap: 64, whiteSpace: "nowrap" }}>
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
        </div>
      </div>
      <div className={styles.newRelease}>
        <h2 style={{ marginTop: 24, marginBottom: 12 }}>Recommend for you</h2>
        <div style={{ display: "flex", width: "100%", overflowX: "auto", gap: 64, whiteSpace: "nowrap" }}>
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
          <NewReleaseCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
