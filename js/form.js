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
  updateTitleInput (e){
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
    let blogPostTitle = this.refs.titleInput.value
  },

  render () {
    return (
        <div>
          <form action="index.html"
                className="blogPostForm"
                method="post">
            <input className="userNameInput"
                   name="userName"
                   onChange={ this.updateUserNameInput }
                   placeholder="Enter User Name"
                   type="text"
                   value={ this.state.userNameInput }/>
            <input className="postDateInput"
                   name="postDate"
                   onChange={ this.updateDateOfPost }
                   type="date"
                   value={ this.state.dateOfPost }/>
            <input className="imageUrlInput"
                   name="imageLink"
                   onChange={ this.updateImageUrlInput }
                   placeholder="Enter Image URL"
                   type="url"
                   value={ this.state.imageUrlInput }/>
            <input className="titleInput"
                   name="title"
                   onChange={ this.updateTitleInput }
                   placeholder="Enter Post Title Here"
                   value={ this.state.titleInput }/>
            <Editable className="wysiwygButtons"
                      content={ this.state.content }
                      onChange={ this.updateContentInput }/>
            <textarea className="blogTextInput"
                      type="text"
                      name=""
                      value={ this.state.blogTextInput }
                      onChange={ this.updateBlogTextInput }
                      placeholder="Enter blog post here">
            </textarea>
            <input className="submitPost"
                   name=""
                   onClick={ this.submitButtonClick }
                   type="submit"
                   value="Submit Post"/>
          </form>
        <article className="newBlogPost"
                 ref="newBlogPost">
        </article>
      </div>
    )
  }
})
