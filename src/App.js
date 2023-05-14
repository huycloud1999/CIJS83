import Navbar from "./components/Navbar/Navbar";
import PlayBar from "./components/PlayBar/PlayBar";
import Header from "./components/Header/Header";
import SlidingForm from "./components/SlidingForm/SlidingForm";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BTCK from "./BTCK";
import Library from "./components/Librarycom/Library";
import Artis from "./components/Artists/Artists";
import Podcast from "./components/Podcast/Podcast";
import Home from "./components/Home/Home";
function App() {
  return (
    <div>
      <Routes>
          <Route path="/signin" element={<SlidingForm/>} />
      </Routes>
          <div
            className="container"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div
              className="nav"
              style={{
                backgroundColor: "red",
                width: "5%",
                position: "fixed",
                height: "100%",
              }}
            >
              <Navbar />
            </div>
            <div
              className="headerMain"
              style={{ width: "95%", height: "100%", marginLeft: "5%" }}
            >
              <div
                style={{
                  backgroundColor: "yellow",
                  height: "10%",
                  position: "fixed",
                  top: 0,
                  width: "100%",
                }}
              >
                <Header />
              </div>
              <div style={{ backgroundColor: "violet", marginTop: "5%" }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/artists" element={<Artis />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/podcast" element={<Podcast />} />
                </Routes>
              </div>
            </div>
          </div>
          <div
            className="playBar"
            style={{
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
