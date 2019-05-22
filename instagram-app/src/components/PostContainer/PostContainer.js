import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import Post from './Post.js';
import './PostContainer.css';
/*const PostContainer = (props) => {
    return (
        <div>
            {props.data.map(c => {
                return (
                    <div>
                        <CommentSection key={c.id} comments={c.comments} />
                    </div>
                );
            })}
        </div>
    );
}*/

const PostContainer = (props) => {
    return (
    <div className='cont'>
        <div>
            <Post data={props.data} />
        </div>
        <div className='commentContainer'>
            {props.data.comments.map(c => {
                return (
                    <div>
                        <CommentSection key={c.id} comment={c} />
                    </div>
                );
            })}
            <div>
                {Date.now()}
            </div>
            <div className='inputHolder'>
                <input
                placeholder='Add a comment...' 
                />
                <img src='./dotDotDot.png' />
            </div>
        </div>
       
    </div>
    );
}


export default PostContainer;