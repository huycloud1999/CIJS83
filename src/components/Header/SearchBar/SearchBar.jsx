import React, { useState, useContext } from 'react';
import Icon from '../../../shared/Icon';
import styles from './SearchBar.module.css';
import { MusicContext } from '../../../MusicContext';

function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { setCurrentSong } = useContext(MusicContext);

  const handleItemClick = (result) => {
    setCurrentSong(result);
    console.log(result)
  };

  const handleSearch = async () => {
    if (searchText.trim() === '') {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }
  
    try {
      const response1 = await fetch('https://645e758312e0a87ac0f0e9aa.mockapi.io/podcasts');
      const response2 = await fetch('https://646cd1e27b42c06c3b2c16a8.mockapi.io/music');
      const data1 = await response1.json();
      const data2 = await response2.json();
      const filteredResults1 = data1.filter((item) =>
        item.nameMusic.toLowerCase().includes(searchText.toLowerCase())
      );
      const filteredResults2 = data2.filter((item) =>
        item.nameMusic.toLowerCase().includes(searchText.toLowerCase())
      );
      const mergedResults = [...filteredResults1, ...filteredResults2];
      setSearchResults(mergedResults);
      setHasSearched(true);
    } catch (error) {
      console.error('Error searching podcasts and music:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (searchText.trim() === '') {
      setIsHovered(false);
      setHasSearched(false);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div
        className={`${styles.searchBox} ${isHovered && searchResults.length === 0 ? styles.hideResults : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchText}
          value={searchText}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles.searchBtn} onClick={handleSearch}>
          <Icon>
            <i
              className="fa-sharp fa-solid fa-magnifying-glass"
              aria-hidden="true"
              style={{ fontSize: 16, color: '#fffffe' }}
            ></i>
          </Icon>
        </button>
      </div>
      {hasSearched && searchResults.length > 0 && (
        <div className={styles.searchResults}>
          {searchResults.map((result) => (
            <div
              key={result.id}
              className={styles.searchResultItem}
              onClick={() => handleItemClick(result)}
            >
              <img src={result.imgMusic} alt={result.nameMusic} className={styles.resultImage} />
              <span>{result.nameMusic}</span>
              <span style={{display:'none'}}>{result.linkMp3}</span>
            </div>
          ))}
        </div>
      )}
      {hasSearched && searchResults.length === 0 && !isHovered && (
        <div className={styles.searchResults}>
          Không có kết quả trùng khớp
        </div>
      )}
    </div>
  );
}

export default SearchBar;