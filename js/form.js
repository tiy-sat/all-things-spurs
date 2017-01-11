import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      userNameInput: '',
      dateOfPost: '',
      imageUrlInput: '',
      blogTextInput: '',
      content: ''
    };
  },

  updateUserNameInput (e){
    this.setState({
      userNameInput: e.target.value
    });
  },
  updateDateOfPost (e){
    this.setState({
      dateOfPost: e.target.value
    });
  },
  updateImageUrlInput (e){
    this.setState({
      imageUrlInput: e.target.value
    });
  },
  updateBlogTextInput (e){
    this.setState({
      blogTextInput: e.target.value
    });
  },

  submitButtonClick (e){
    e.preventDefault();
    let blogText = this.refs.blogTextInput.value
    let postDate = this.refs.postDate.value
    let imageLink = this.refs.imageUrlInput.value
    let blogPostText = this.refs.blogPostText.value
  },

  render () {
    return (
        <div>
        <form className="blogPostForm" action="index.html" method="post">
          <h2 className="blogPostFormTitle">WRITE A NEW BLOG POST FOR US BELOW</h2>
          <input className="submitPost" type="submit" name="" value="Submit Post" onClick={ this.submitButtonClick }/>
        </form>
        <article className="newBlogPost" ref="newBlogPost">
        </article>
      </div>
    )
  }
})
