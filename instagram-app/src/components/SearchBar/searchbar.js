import React from 'react';
import './SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    handleFormInput = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    performSearch = event => {
        event.preventDefault();
        this.props.handleSearch(this.state.searchTerm);
        this.setState({
            searchTerm: ''
        })
    }

    render(){
        // console.log(this.props)
        return (
            <div className='search-bar'>
                <div className='logo-group'>
                    {/* <a href='/'>Instagram</a> */}
                </div>
                <div className='search'>
                    <form onSubmit={this.performSearch}>
                        <input 
                        placeholder='Search'
                        onChange={this.handleFormInput}
                        value={this.state.searchTerm}
                        />
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
}

export default SearchBar;