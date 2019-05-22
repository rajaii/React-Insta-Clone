import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = (props) => {
    return (
       
            <div>
                <p className='name'>{props.username}</p>
                <p>{props.text}</p>
            </div>
            
        
    );
}

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Comment;