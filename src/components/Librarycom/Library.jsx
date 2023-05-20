import React from 'react'
import { useNavigate } from "react-router-dom";

function Library() {
  const navigate = useNavigate();
const handleClick =()=>{
  navigate('/playlist')
}
  return (
    <div>
      <h1>Đây là library</h1>
        <button onClick={handleClick}>chill</button>
    </div>
  )
}

export default Library