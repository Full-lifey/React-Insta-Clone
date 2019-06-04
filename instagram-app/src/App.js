import React from 'react';
import './App.scss';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  handleSearch = searchTerm => {
    const newState = this.state.data.filter(post => post.username === searchTerm)
    this.setState({
      data: newState
    })
  }

  addNewComment = (event, index) => {

  }

  render(){
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch}/>
        {this.state.data.map(post => {
          return (
            <PostContainer key={post.id} post={post} addNewComment={this.addNewComment}/>
          )
        })}
      </div>
    );
  }
}

export default App;
