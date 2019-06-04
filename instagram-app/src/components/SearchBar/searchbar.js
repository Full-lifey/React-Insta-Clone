import React from 'react';
import './SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'

function SearchBar (props) {
    return (
        <div className='search-bar'>
            <div className='logo-group'>
                {/* <a href='/'>Instagram</a> */}
            </div>
            <div className='search'>
                <form>
                    <input placeholder='Search' />
                </form>
            </div>
            <div className='container-right'>
                <FontAwesomeIcon icon={faCompass} size='2x' />
                <FontAwesomeIcon icon={faHeart} size='2x' />
                <FontAwesomeIcon icon={faUser} size='2x' />
            </div>
        </div>
    )
}

export default SearchBar;