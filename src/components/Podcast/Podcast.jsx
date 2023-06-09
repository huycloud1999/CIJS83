import React, { useEffect, useState } from 'react';
import PodcastItem from './PodcastIem/PodcastItem';
import styles from './Podcast.module.css';
import { useContext } from 'react';
import { MusicContext } from '../../MusicContext';
function Podcast() {
  const [podcasts, setPodcasts] = useState([]);
  const { setCurrentSong } = useContext(MusicContext);
  useEffect(() => {
    fetch('https://645e758312e0a87ac0f0e9aa.mockapi.io/podcasts')
      .then(response => response.json())
      .then(data => setPodcasts(data))
      .catch(error => {
        console.error('Error fetching podcasts:', error);
      });
  }, []);

  // Extract the first 8 items for Top Podcasts
  const topPodcasts = podcasts.slice(0, 8);

  // Extract the last 8 items for Categories
  const categoriesPodcasts = podcasts.slice(-8);
  const handlePlayMusic = (podcast) => {
    setCurrentSong(podcast);

  };
  return (
    <div className={styles.container}>
      <h1>Top Podcasts</h1>
      <div className={styles.podcastList}>
        {topPodcasts.map(podcast => (
          <PodcastItem key={podcast.id} podcast={podcast} onClick={handlePlayMusic} />
        ))}
      </div>
      <h1>Categories</h1>
      <div className={styles.podcastList}>
        {categoriesPodcasts.map(podcast => (
          <PodcastItem key={podcast.id} podcast={podcast}onClick={handlePlayMusic} />
        ))}
      </div>
    </div>
  );
}

export default Podcast;
