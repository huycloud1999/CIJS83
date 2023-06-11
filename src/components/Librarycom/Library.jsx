import React from 'react'
import { useNavigate } from "react-router-dom";
import ItemLibrary from './ItemLibrary/ItemLibrary';
import AddItemLibrary from './addItemLibrary/AddItemLibrary';

function Library() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/playlist')
  }
  return (
    <div style={{ backgroundColor: 'var(--body_background)', paddingTop: '30px', paddingLeft: '30px', minHeight: '80vh', display: 'flex', gap: '20px' }}>
      <ItemLibrary />
      <ItemLibrary />
      <ItemLibrary />
      <AddItemLibrary />
    </div>
  )
}

export default Library