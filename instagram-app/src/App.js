import React from 'react';
import './App.scss';
import withAuthenticate from './components/authentication/withauthenticate'
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/login'


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage)

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
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
