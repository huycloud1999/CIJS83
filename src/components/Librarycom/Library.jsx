import React from 'react'
import { useNavigate } from "react-router-dom";
import ItemLibrary from './ItemLibrary/ItemLibrary';

function Library() {
  const navigate = useNavigate();
const handleClick =()=>{
  navigate('/playlist')
}
  return (
    <div style={{paddingTop:'30px',paddingLeft:'30px',minHeight:'80vh'}}>
      <ItemLibrary/>
    </div>
  )
}

export default Library