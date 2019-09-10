import React from 'react';
import PropTypes from 'prop-types';

//the Actual post that contains state which gives us the availability to change the state for upvotes and downvotes
class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upvotes: 0,
            downvotes: 0
        };
        //binding this so each method has access to this
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    handleUpvote() {
        var temp = this.state.upvotes;
        this.setState({ upvotes: temp + 1 });
    }

    handleDownvote() {
        var temp = this.state.downvotes;
        this.setState({ downvotes: temp + 1 });
    }

    ///returning username,postititle,postbody on each div being built
    //on click to invoke the setstate for each method

    render() {
        return (
            <div style={cardStyle}>
                <h4>{this.props.userName}</h4>
                <h4>{this.props.postTitle}</h4>
                <h4>{this.props.postBody}</h4>
                <button onClick={this.handleUpvote}>Upvote {this.state.upvotes}</button>
                {/* Upvote count */}
                <button onClick={this.handleDownvote}>Downvote {this.state.downvotes}</button>
                {/* Downvote count */}

            </div>
        )
    }
}
var cardStyle = {

    backgroundColor: 'darkgray',
    width: '90%',
    height: '300px',
    overflow: 'auto',
    border: '2px solid black'

}


Post.propTypes = {
    userName: PropTypes.string,
    postTitle: PropTypes.string,
    postBody: PropTypes.string
}

export default Post;