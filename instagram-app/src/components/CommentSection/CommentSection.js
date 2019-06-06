import React from 'react';
import styled from 'styled-components'

// import './CommentSection.scss';

// Styled Components
const CommentDiv = styled.div`
    height: 30px;
    display: flex;
    margin: 5px 10px 0 0;
`
const CommentUsername = styled.h5`
    margin: 0;
    height: 100%;
    line-height: 20px;
`
const CommentText = styled.p`
    vertical-align: middle;
    height: 30px;
    margin-left: 4px
`

// CommentSection Component
class CommentSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments: this.props.comments
        }
    }
    render() {
        // console.log('Rendering Comments', this.state.comments)
        return (
            this.props.comments.map(comment => {
                return (
                    <CommentDiv key={comment.id} className={`comment`}>
                        <CommentUsername>{comment.username}</CommentUsername>
                        <CommentText>{comment.text}</CommentText>
                    </CommentDiv>
                )
            })
        )
    }
}

export default CommentSection;