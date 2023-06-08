
import Navbar from "./components/Navbar/Navbar";
import PlayBar from "./components/PlayBar/PlayBar";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BTCK from "./BTCK";
import Podcast from "./components/Podcast/Podcast";
import Home from "./components/Home/Home";
import Artisist from "./components/Artis/Artisist";
import Library from "./components/Librarycom/Library";
import Playlist from "./components/Playlist/Playlist";
import SignUp from "./components/SignUp/SignUp";
import AlbumPlaylist from "./components/Playlist/AlbumPlaylist";
import { MusicProvider } from "./MusicContext";

function App() {
  return (
    <MusicProvider>
      <Routes>
        <Route path="/" element={<BTCK></BTCK>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/artists" element={<Artisist />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/playlist" element={<Playlist />}></Route>
          <Route path="/albumplaylist" element={<AlbumPlaylist />}></Route>
          <Route path="/podcast" element={<Podcast />}></Route>
          <Route path="/library" element={<Library />}></Route>
        </Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </MusicProvider>
  );
}

export default App;
