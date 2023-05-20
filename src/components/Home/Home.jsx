import React from "react";
import styles from './Home.module.css';
import JazzAlbum from '../image/jazzalbum.jpg';
import Icon from '../../shared/Icon';
import TrungTam from '../image/trungtam.jpg';
import StarBoy from '../image/starboy.jpg';
import BongHoa from '../image/bonghoa.jpg';
import { NavLink } from "react-router-dom";
import { useState } from "react";


function Home() {

  return (

    <div>

      <div style={{ height: '100%', display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <img
            src={JazzAlbum}
            alt=""
            style={{
              width: '100%',
            }}
          />
        </div>
        <div style={{
          paddingLeft: 32
        }}>

          <h2 style={{ paddingLeft: 36, margin: 0 }}>Top Albums</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>

            <div
              className={styles.topAlbums}
              styles={{ display: 'inline-block' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <img src={BongHoa} alt="" style={{ width: '15%', height: '100%', borderRadius: 8 }} />
                <button className={styles.playBtn}>
                  <i style={{ color: '#ffffff' }} class="fa-solid fa-play"></i>
                </button>
                <div className={styles.topAlbumsInfo}>
                  <h4>Bông Hoa Tệ Nhất</h4>
                  <p>1337</p>
                  <p>3:20:51</p>
                </div>
              </div>
              <div>
                <button className={styles.likeBtn}>
                  <Icon><i class="fa-regular fa-heart" style={{ fontSize: 28 }}></i></Icon>
                </button>
              </div>
            </div>

            <div className={styles.topAlbums}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={BongHoa} alt="" style={{ width: '15%', height: '100%', borderRadius: 8 }} />
                <div className={styles.topAlbumsInfo}>
                  <h4>Bông Hoa Tệ Nhất</h4>
                  <p>1337</p>
                  <p>3:20:51</p>
                </div>
              </div>
              <div>
                <button className={styles.likeBtn}>
                  <Icon><i class="fa-regular fa-heart" style={{ fontSize: 28 }}></i></Icon>
                </button>
              </div>
            </div>

            <div className={styles.topAlbums}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={BongHoa} alt="" style={{ width: '15%', height: '100%', borderRadius: 8 }} />
                <div className={styles.topAlbumsInfo}>
                  <h4>Bông Hoa Tệ Nhất</h4>
                  <p>1337</p>
                  <p>3:20:51</p>
                </div>
              </div>
              <div>
                <button className={styles.likeBtn}>
                  <Icon><i class="fa-regular fa-heart" style={{ fontSize: 28 }}></i></Icon>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.newRelease}>
        <h2 style={{ marginTop: 24, marginBottom: 12 }}>New Releases</h2>
        <div style={{ display: "flex", width: "100%", overflowX: "scroll", gap: 64, whiteSpace: "nowrap" }}>
          <div style={{ position: 'relative' }}>
            <img src={BongHoa} alt="" style={{ width: '100%', borderRadius: 16 }} />
            <button className={styles.bigPlayBtn}>
              <i style={{ color: '#ffffff', fontSize: 20 }} class="fa-solid fa-play"></i>
            </button>
            <h4>Bông Hoa Tệ Nhất</h4>
          </div>
          <div>
            <img src={BongHoa} alt="" style={{ width: '100%', borderRadius: 16 }} />
            <h4>Bông Hoa Tệ Nhất</h4>
          </div>
          <div>
            <img src={BongHoa} alt="" style={{ width: '100%', borderRadius: 16 }} />
            <h4>Bông Hoa Tệ Nhất</h4>
          </div>
          <div>
            <img src={BongHoa} alt="" style={{ width: '100%', borderRadius: 16 }} />
            <h4>Bông Hoa Tệ Nhất</h4>
          </div>
          <div>
            <img src={BongHoa} alt="" style={{ width: '100%', borderRadius: 16 }} />
            <h4>Bông Hoa Tệ Nhất</h4>
          </div>
          <div>
            <img src={BongHoa} alt="" style={{ width: '100%', borderRadius: 16 }} />
            <h4>Bông Hoa Tệ Nhất</h4>
          </div>
          <div>
            <img src={BongHoa} alt="" style={{ width: '100%', borderRadius: 16 }} />
            <h4>Bông Hoa Tệ Nhất</h4>
          </div>
          <div>
            <img src={BongHoa} alt="" style={{ width: '100%', borderRadius: 16 }} />
            <h4>Bông Hoa Tệ Nhất</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
