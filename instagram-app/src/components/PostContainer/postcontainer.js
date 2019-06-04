import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

import "./PostContainer.scss";

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

  addNewComment = (event, index) => {
    event.preventDefault();
    // console.log(this.props.post)
    // console.log(this.props.post.comments.length)
    const newComment = {
      id: this.props.post.comments.length + 1,
      username: "UsernamesR4Punks",
      text: this.state.newComment
    };
    // this.props.addNewComment(this.state.newComment, this.props.post.comments.length)
    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: ""
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
      <div className="post-container">
        <div className="post-header">
          <img
            src={this.props.post.thumbnailUrl}
            alt={this.props.post.username}
          />
          <h5>{this.props.post.username}</h5>
        </div>
        <div className="post-image">
          <img src={this.props.post.imageUrl} alt="post" />
        </div>
        <div className="action-btns">
          <FontAwesomeIcon 
            className='like-heart'
            onClick={this.likePost}
            icon={faHeart} 
            size="2x"
            />
          <FontAwesomeIcon icon={faComment} size="2x" />
        </div>
        <div className="likes">{this.state.likes} likes</div>
        <div className="comment-container">
          <CommentSection comments={this.state.comments} />
        </div>
        <p className="timestamp">{this.props.post.timestamp}</p>
        <form onSubmit={this.addNewComment}>
          <input
            placeholder="Add a comment..."
            onChange={this.handleCommentInput}
            value={this.state.newComment}
          />
        </form>
      </div>
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
