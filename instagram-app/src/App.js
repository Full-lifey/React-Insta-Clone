import React from 'react';
import './App.scss';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostContainer/PostsPage';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: []
  //   }
  // }

  // componentDidMount() {
  //   this.setState({
  //     data: dummyData
  //   })
  // }

  // handleSearch = searchTerm => {
  //   const newState = this.state.data.filter(post => post.username.includes(searchTerm))
  //   this.setState({
  //     data: newState
  //   })
  // }


  render(){
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
