import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PlayBar from './components/PlayBar/PlayBar'
import { BrowserRouter,Outlet,Route } from 'react-router-dom'
import Library from './components/Librarycom/Library'
function BTCK() {
  return (
    <div>
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
          color: "white",
          backgroundColor: "#101010",
        }}
      >
        <div
          style={{
            backgroundColor: "#101010",
            height: "10%",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex:"1"
          }}
        >
         
         <Header/>
       </div>
        <div style={{ marginTop: "5%", backgroundColor: "#16161a",}}>
          <Outlet></Outlet>
     </div>
       </div>
     </div>
    <div className="playBar" style={{ width: "100vw", height: "10%", position: "fixed", bottom: 0 }}>
    <PlayBar> </PlayBar>
    </div>
   </div>
  )
}

export default BTCK