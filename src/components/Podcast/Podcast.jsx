import React, { useEffect, useState } from 'react';
import PodcastItem from './PodcastIem/PodcastItem';

function Podcast() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch('https://647ef709c246f166da8fc589.mockapi.io/podcast')
      .then(response => response.json())
      .then(data => setArtists(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{ marginLeft: '5%' }}>
      <div style={{ paddingTop: '30px', display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%', rowGap: '20px', paddingBottom: '7%' }}>
        {artists.map(artist => (
          <PodcastItem key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default Podcast;
