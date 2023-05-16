import Navbar from "./components/Navbar/Navbar";
import PlayBar from "./components/PlayBar/PlayBar";
import Header from "./components/Header/Header";
import SlidingForm from "./components/SlidingForm/SlidingForm";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BTCK from "./BTCK";


import Podcast from "./components/Podcast/Podcast";
import Home from "./components/Home/Home";
import Artisist from "./components/Artis/Artisist";
import Library from "./components/Librarycom/Library";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SlidingForm />} />
      </Routes>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        <div
          className="nav"
          style={{
            backgroundColor: "#000000",
            width: "10%",
            position: "fixed",
            height: "100%",
          }}
        >
          <Navbar />
        </div>
        <div
          className="headerMain"
          style={{
            width: "90%",
            height: "100%",
            marginLeft: "10%",
            // paddingTop: "5%",
            color: "white",
            backgroundColor: "#1e1e1e",
          }}
        >
          <div
            style={{
              backgroundColor: "#111111",
              height: "10%",
              position: "fixed",
              top: 0,
              width: "100%",
            }}
          >
            <Header />
          </div>
          <div style={{ marginTop: "5%",padding:'20px',backgroundColor: "#1e1e1e", }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/artists" element={<Artisist />} />
              <Route path="/library" element={<Library />} />
              <Route path="/podcast" element={<Podcast />} />
            </Routes>
          </div>
        </div>
      </div>
      <div
        className="playBar"
        style={{
          display:'none',
          backgroundColor: "pink",
          width: "100vw",
          height: "10%",
          position: "fixed",
          bottom: 0,
        }}
      >
        <PlayBar />
      </div>
    </div>
  );
}

export default App;
