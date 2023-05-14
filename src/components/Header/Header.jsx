import React from 'react'
import SearchBar from './SearchBar/SearchBar.jsx'
import UserBar from './UserBar/UserBar.jsx'


function Header() {
  return (
    <div>
      <SearchBar></SearchBar>
      <UserBar></UserBar>
    </div>
  )
}

export default Header