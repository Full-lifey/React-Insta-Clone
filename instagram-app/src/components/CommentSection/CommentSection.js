import React from 'react';

import './CommentSection.scss';

const CommentSection = props => {
    return (
        <div className={`comment ${props.comment.id}`}>
            <h5>{props.comment.username}</h5>
            <p>{props.comment.text}</p>
            {/* <p className='timestamp'>{props.timestamp}</p> */}
        </div>
    )
}

export default CommentSection;