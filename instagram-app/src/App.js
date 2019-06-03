import React from 'react';
import logo from './logo.svg';
import './App.scss';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render(){
    console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => {
          return (
            
          )
        })}
      </div>
    );
  }
}

export default App;
