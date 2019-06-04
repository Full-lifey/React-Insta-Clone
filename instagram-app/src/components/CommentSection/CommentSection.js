import React from 'react';

import './CommentSection.scss';

class CommentSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments: this.props.comments
        }
    }

    componentDidUpdate(){
        
    }
    addNewComment = (event) => {
        event.preventDefault();
       
    }
    render() {
        console.log('Rendering Comments', this.state.comments)
        return (
            this.props.comments.map(comment => {
                return (
                    <div key={comment.id} className={`comment ${comment.id}`}>
                        <h5>{comment.username}</h5>
                        <p>{comment.text}</p>
                    </div>
                )
            })
        )
    }
}

export default CommentSection;