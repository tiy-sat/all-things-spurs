import React from 'react';

export default React.createClass({
  render (){
    return (
      <article>
        <h2 className="postTitle">{this.props.titleInput}</h2>
        <img className="postImage" src={this.props.imageUrlInput}></img>
        <h2 className="userName">{this.props.userNameInput}</h2>
        <h3 className="postDate">{this.props.dateOfPost}</h3>
        <p className="blogText">{this.props.blogTextInput}</p>
      </article>
    )
  }
})
