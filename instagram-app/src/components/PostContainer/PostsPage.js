import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends React.Component {
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
        const newState = this.state.data.filter(post => post.username.includes(searchTerm))
        this.setState({
          data: newState
        })
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


export default PostsPage;