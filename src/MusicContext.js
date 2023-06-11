import React, { createContext, useState } from "react";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <MusicContext.Provider value={{ playlist, setPlaylist, currentSong, setCurrentSong }}>
      {children}
    </MusicContext.Provider>
  );
};
