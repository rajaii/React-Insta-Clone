import React from 'react';
import Comment from './Comment.js';
import './CommentSection.css';
import CommentForm from './CommentForm.js';
 
class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            comment: {
                id:'',
                username: '',
                text: '',
            }
        }
    }

    componentDidMount() {
        this.setState({
            comments: this.state.comments,
            comment: {
                id: this.props.data.comments.length,
                username: this.props.username,
                text: '',
            }
            
        })
        console.log(this.state.comment);
    }

    addNewComment = (e,i) => {
        e.preventDefault();
        let newComment = {
            id: i,
            username: this.state.comment.username,
            text: this.state.comment.text,
        }
        
        this.setState({
            comments: [...this.state.comments, newComment],
            comment: {
                id: '',
                username: '',
                text: '',
            }})
        
    }   

    handleInput = (e) => {
    
        this.setState({
            comment: {
            username: this.state.comment.username,
            id: this.state.comment.id,
            text: e.target.value,
            
        }})
    }
    
    
    

    

    render() {
        return (
            <div>
                <div>
                {this.state.comments.map(c => {
                    return (
                        <div>
                            <Comment key={c.id} username={c.username} text={c.text} />
                        </div>
                    );
                })}
                </div>

                <div>
                {this.props.timestamp}
                </div>

                <CommentForm handleInput={this.handleInput} updateComments={this.updateComments} comments={this.state.comments} comment={this.state.comment} text={this.state.comment.text} addNewComment={this.addNewComment} />

                
                
            </div>
           
        );
    }

    
}      


export default CommentSection;
//the form and actual funtionality and the this.addNewComment() 
//function how to tie in the post id with the setstate
//why do we need i???