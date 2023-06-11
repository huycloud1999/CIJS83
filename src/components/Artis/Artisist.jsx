import React, { useEffect, useState } from 'react';
import ArtistsItem from './ArtistsItem/ArtistsItem';

function Artisist({ }) {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch('https://64565c5c5f9a4f236141d828.mockapi.io/artists')
      .then(response => response.json())
      .then(data => setArtists(data))
      .catch(error => console.log(error));
  }, []);

  return (
<<<<<<< HEAD
    <div style={{ backgroundColor: 'var(--body_background)', paddingLeft: 64 }}>
      <div style={{
        paddingTop: '30px',
        display: 'grid',
        gridTemplateColumns: '20% 20% 20% 20% 20%',
        rowGap: '20px',
        paddingBottom: '7%',
        backgroundColor: 'var(--body_background)',
      }}>
        {artists.map(artist => (
          <ArtistsItem key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
=======
    <div style={{marginLeft:'5%'}}>
      <div style={{paddingTop:'30px',display:'grid',gridTemplateColumns:'20% 20% 20% 20% 20%',rowGap:'20px' ,paddingBottom:'7%'}}>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>
      <ArtistsItem/>

      </div>
    </div>
  )
>>>>>>> 4a00eca50d8d94f3b76bb781e055d34ca000bd48
}

export default Artisist;
