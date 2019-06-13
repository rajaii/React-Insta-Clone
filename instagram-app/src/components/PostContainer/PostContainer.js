import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import Post from './Post.js';
import './PostContainer.css';
import styled from 'styled-components';

const Cont = styled.div`
width: 85%;
margin: 0 auto;
`
const CommentContainer = styled.div`
    width: 85%;
    margin: 0 auto;
`
class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.data.likes,
        }
    }

    handleLikeClick = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
    return (
    <Cont>
        <div>
            <Post data={this.props.data} likes={this.state.likes} handleLikeClick={this.handleLikeClick}/>
        </div>
        <CommentContainer>
            <CommentSection username='Ali' data={this.props.data} comments={this.props.data.comments} timestamp={this.props.data.timestamp}/>
        </CommentContainer>
        
            
    </Cont>
    
    );
}}


export default PostContainer;