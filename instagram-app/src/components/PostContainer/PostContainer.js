import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import Post from './Post.js';
import './PostContainer.css';


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
    <div className='cont'>
        <div>
            <Post data={this.props.data} likes={this.state.likes} handleLikeClick={this.handleLikeClick}/>
        </div>
        <div className='commentContainer'>
            <CommentSection username='Ali' data={this.props.data} comments={this.props.data.comments} timestamp={this.props.data.timestamp}/>
        </div>
        
            
    </div>
    
    );
}}


export default PostContainer;