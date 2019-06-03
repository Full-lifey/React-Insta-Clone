import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    // console.log(props.post.thumbnailUrl)
    return (
        <div className='post-container'>
            <div className='post-header'>
                <img src={props.post.thumbnailUrl} alt={props.post.username} />
                <p>{props.post.username}</p>
            </div>
            <div className='post-image'>
                <img src={props.post.imageUrl} alt='post' />
            </div>
            <div className='action-btns'>heart reply</div>
            <div className='likes'>{props.post.likes} likes</div>
            <div className='comment-container'>
                {props.post.comments.map(comment => {
                    return (
                        <CommentSection key={comment.id} comment={comment} />
                    )
                })}
            </div>
        </div>
    )
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
}
export default PostContainer