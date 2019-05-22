import React from 'react';
import PropTypes from 'prop-types';
import './Post.css'

const Post = (props) => {
    return (
        <div className='container'>
            <div className='postTop'>
                <img src={props.data.thumbnailUrl} />
                <p>{props.data.username}</p>
            </div>
            <div className='postPic'>
                <img src={props.data.imageUrl}/>
            </div>
            <div className='icon'>
                <img src='./like.png' />
                <img src='./chat.png' />
            </div>
            <div>
                <p>{props.data.likes} likes</p>
            </div>
            

        </div>
    );
}

Post.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                username: PropTypes.string,
                text: PropTypes.string,
            })
        )
        })
    )
};

export default Post;