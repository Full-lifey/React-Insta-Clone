import React from 'react';
import './SearchBar.scss'

function SearchBar (props) {
    return (
        <div className='search-bar'>
            <div className='logo-group'>
                <a href='/'></a>
            </div>
            <div className='search'>
                <form>
                    <input placeholder='Search' />
                </form>
            </div>
            <div className='container-right'>
                <div>Compass</div>
                <div>Heart</div>
                <div>Person</div>
            </div>
        </div>
    )
}

export default SearchBar;