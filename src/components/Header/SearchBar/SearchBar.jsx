import React from 'react'
import Icon from '../../../shared/Icon'
import styles from './SearchBar.module.css'

function SearchBar() {
    return (
        <div className={styles.searchBox}>
            <input type="text" placeholder='Search...' className={styles.searchText} />
            <button type='submit' className={styles.searchBtn}>
                <Icon><i class="fa-sharp fa-solid fa-magnifying-glass" aria-hidden='true' style={{ fontSize: 16,color: 'white' }}></i></Icon>
            </button>
        </div>
    )
}

export default SearchBar