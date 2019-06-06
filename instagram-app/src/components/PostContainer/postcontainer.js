import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import styled from 'styled-components'

// Create Post Container styled components
const PostContainerDiv = styled.div`
    border: 1px solid #efefef;
    width: 700px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    margin-bottom: 30px;
     .post-image {
        width: 100%;
        img {
            width: 100%;
        }
    }

    .likes {
    font-weight: bold;
    margin-left: 10px;
    margin-bottom: 5px;
    font-size: 22px;
    }
    .comment-container{
        margin-left: 10px;
    }
    .timestamp {
    margin: 0 0 0 10px;
    font-weight: 200;
    }
`;

const PostHeaderDiv = styled.div`
    height: 60px;
    display: flex;
    border-bottom: 1px solid #efefef;
    img {
        height: 50%;
        border-radius: 50%;
        margin: 15px;
    }
    h5 {
        line-height: 65px;
    }
`

const ActionButtonsDiv = styled.div`
    margin: 10px;
    .liked{
        color: red;
    }
    svg {
        margin-right: 10px;
        &:hover{
        color: red;
        }
    }
`

const AddButtonForm = styled.form`
    border-top: 1px solid #efefef;
    width: 100%;
    height: 40px;
    input{
        width: 100%;
        height: 90%;
        padding: 10px;
        border: none;
        :focus{
            outline-width: 0;
        }
    }
`

// Post Container class 
class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.post.comments,
      newComment: "",
      likes: this.props.post.likes
    };
  }

  handleCommentInput = event => {
    this.setState({
      newComment: event.target.value
    });
  };

  addNewComment = (event) => {
    event.preventDefault();
    console.log(this.props.post.comments.length)
    const newComment = {
      id: this.state.comments.length + 1,
      username: JSON.parse(localStorage.getItem('isLoggedIn')).username,
      text: this.state.newComment
    };
    this.setState(prevState => {
        return {
            comments: [...prevState.comments, newComment],
            newComment: ""
        }
    });
  };

  likePost = event => {
    event.target.classList.toggle('liked')
    if (event.target.classList.contains('liked')){
        this.setState(prevState => {
            return {
                likes: prevState.likes+1
            }})
    } else this.setState(prevState => {
        return {
            likes: prevState.likes-1
        }})
  }

  render() {
    return (
      <PostContainerDiv className="post-container">
        <PostHeaderDiv className="post-header">
          <img
            src={this.props.post.thumbnailUrl}
            alt={this.props.post.username}
          />
          <h5>{this.props.post.username}</h5>
        </PostHeaderDiv>
        <div className="post-image">
          <img src={this.props.post.imageUrl} alt="post" />
        </div>
        <ActionButtonsDiv className="action-btns">
          <FontAwesomeIcon 
            className='like-heart'
            onClick={this.likePost}
            icon={faHeart} 
            size="2x"
            />
          <FontAwesomeIcon icon={faComment} size="2x" />
        </ActionButtonsDiv>
        <div className="likes">{this.state.likes} likes</div>
        <div className="comment-container">
          <CommentSection comments={this.state.comments} />
        </div>
        <p className="timestamp">{this.props.post.timestamp}</p>
        <AddButtonForm onSubmit={this.addNewComment}>
          <input
            placeholder="Add a comment..."
            onChange={this.handleCommentInput}
            value={this.state.newComment}
          />
        </AddButtonForm>
      </PostContainerDiv>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};
export default PostContainer;
