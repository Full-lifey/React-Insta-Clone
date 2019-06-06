import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHeart,
  faUser
} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

// Styled Components
const SearchBarDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  padding: 26px 60px;
  position: fixed;
  top: 0;
  left: 5%;
  overflow: hidden;
  background: white;
`;

const LogoGroupDiv = styled.div`
  background-image: url("https://www.instagram.com/static/images/branding/logoWhiteoutLockup.png/3a62b1a95da3.png");
  background-size: 100%;
  height: 35px;
  width: 176px;
`;

const ContainerRightDiv = styled.div`
  display: flex;
  svg {
    margin-left: 10px;
  }
  .logout {
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

// SearchBar component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleFormInput = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  performSearch = event => {
    event.preventDefault();
    this.setState({
      searchTerm: event.target.value
    });
    this.props.handleSearch(this.state.searchTerm);
  };

  render() {
    // console.log(this.props)
    return (
      <SearchBarDiv className="search-bar">
        <LogoGroupDiv className="logo-group">
          {/* <a href='/'>Instagram</a> */}
        </LogoGroupDiv>
        <div className="search">
          <form onSubmit={e => e.preventDefault()}>
            <input
              placeholder="&#x1f50d;&nbsp;&nbsp;Search"
              onChange={this.performSearch}
              value={this.state.searchTerm}
            />
          </form>
        </div>
        <ContainerRightDiv className="container-right">
          <FontAwesomeIcon icon={faCompass} size="2x" />
          <FontAwesomeIcon icon={faHeart} size="2x" />
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            onClick={this.props.logOut}
            className="logout"
          />
        </ContainerRightDiv>
      </SearchBarDiv>
    );
  }
}

export default SearchBar;
