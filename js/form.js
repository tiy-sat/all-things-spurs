import React from 'react';
import Editable from 'react-wysiwyg-editor'

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
  },

  render () {
    return (
        <form className="blogPostForm" action="index.html" method="post">
          <input className="userNameInput" type="text" name="userName" value={ this.state.userNameInput } onChange={ this.updateUserNameInput } placeholder="Enter User Name"/>
          <input className="postDateInput" type="date" name="postDate" value={ this.state.dateOfPost } onChange={ this.updateDateOfPost }/>
          <input className="imageUrlInput" type="url" name="imageLink" value={ this.state.imageUrlInput } onChange={ this.updateImageUrlInput } placeholder="Enter Image URL"/>
          <Editable className="wysiwygButtons" content={ this.state.content } onChange={ this.updateContentInput }/>
          <textarea className="blogTextInput"type="text" name="" value={ this.state.blogTextInput } onChange={ this.updateBlogTextInput } placeholder="Enter blog post here"></textarea>
          <input className="submitPost" type="submit" name="" value="Submit Post" onClick={ this.submitButtonClick }/>
        </form>
    )
  }
})
