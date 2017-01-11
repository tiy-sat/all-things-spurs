import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      userNameInput: '',
      dateOfPost: '',
      imageUrlInput: '',
      blogTextInput: '',
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
          <input className="userNameInput" type="text" name="userName" ref="blogTextInput" value={ this.state.userNameInput } onChange={ this.updateUserNameInput } placeholder="Enter User Name"/>
          <input className="postDateInput" type="date" name="postDate" ref="postDate"value={ this.state.dateOfPost } onChange={ this.updateDateOfPost }/>
          <input className="imageUrlInput" type="url" name="imageLink" ref="imageUrlInput" value={ this.state.imageUrlInput } onChange={ this.updateImageUrlInput } placeholder="Enter Image URL"/>
          <textarea className="blogTextInput"type="text" name="" ref="blogPostText" value={ this.state.blogTextInput } onChange={ this.updateBlogTextInput } placeholder="Enter blog post here"></textarea>
          <input className="submitPost" type="submit" name="" value="Submit Post" onClick={ this.submitButtonClick }/>
        </form>
        <article className="newBlogPost" ref="newBlogPost">
        </article>
      </div>
    )
  }
})
