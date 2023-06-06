import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchBar from './SearchBar/SearchBar';
import UserBar from './UserBar/UserBar';
import BackForward from './BackAndForwardbtn/BackForward';
function Header() {

    
  return (
    <div style={{display:'flex',justifyContent:'space-between',width:'90%',alignItems:'center'}}>
      <div>
        <SearchBar/>
       
      </div>
      {/* <BackForward/> */}
      <div>
        <UserBar/>
      </div>
    </div>
  )
}

export default Header