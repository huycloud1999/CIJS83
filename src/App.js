import Navbar from "./components/Navbar/Navbar";
import PlayBar from "./components/PlayBar/PlayBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SlidingForm from "./components/SlidingForm/SlidingForm";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div>
      <div className="container" style={{ display: "flex", flexDirection: "row" }}>
        <div className="nav"
          style={{
            backgroundColor: "red",
            width: "5%",
            position: "fixed",
            height: "90%"
          }}>
          <Navbar />
        </div>
        <div className="headerMain" style={{ width: "95%", height: "100%", marginLeft: "5%" }}>
          <div style={{ backgroundColor: "green", height: "10%", position: "fixed", top: 0, width: "100%" }}>
            <Header />
          </div>
          <div style={{ backgroundColor: "violet", marginTop: "5%" }}>
            <Main />
          </div>
        </div>
      </div>
      <div className="playBar" style={{ backgroundColor: "pink", width: "100vw", height: "10%", position: "fixed", bottom: 0 }}>
        <PlayBar />
      </div>
      {/* <SlidingForm /> */}
    </div>
  );
}

export default App;
