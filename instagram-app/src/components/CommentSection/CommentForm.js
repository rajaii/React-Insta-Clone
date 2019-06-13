import React from 'react';
import './CommentSection.css';


const CommentForm = (props) => {
    return (
        <div>
            <div className='inputHolder'>
                    <div className='formHolder'>
                        <form onSubmit={(event) => props.addNewComment(event, props.comments.length)}>
                            <input 
                            type='text'
                            placeholder='Add a comment...'
                            value={props.text} 
                            onChange={props.handleInput}
                           />
                        </form>
                    </div>
                    <div>
                        <img src='./dotDotDot.png' />
                    </div>
                </div>
        </div>
    );
}

export default CommentForm;