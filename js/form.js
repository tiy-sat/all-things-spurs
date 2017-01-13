import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      name: '',
      date: '',
      image: '',
      text: '',
      title: ''
    };
  },

  updateUserNameInput (e){
    this.setState({
      name: e.target.value
    });
  },
  updateDateOfPost (e){
    this.setState({
      date: e.target.value
    });
  },
  updateImageUrlInput (e){
    this.setState({
      image: e.target.value
    });
  },
  handleContentChange: function(e) {
    this.setState({content: e.target.value});
  },
  updateBlogTextInput (e){
    this.setState({
      text: e.target.value
    });
  },
  updateTitleInput (e){
    this.setState({
      title: e.target.value
    });
  },

  submitButtonClick (e){
    e.preventDefault()
    this.props.setMainState(
       this.state
    )
  },

  render () {
    return (
        <div>
          <form action="index.html"
                className="blogPostForm"
                method="post">
            <h2 className= "formHeading">Thoughts on the video? Post it here!</h2>
            <input className="userNameInput"
                   name="userName"
                   onChange={ this.updateUserNameInput }
                   placeholder="Enter User Name"
                   type="text"
                   value={ this.state.name }/>
            <input className="postDateInput"
                   name="postDate"
                   onChange={ this.updateDateOfPost }
                   type="date"
                   value={ this.state.date }/>
            <input className="imageUrlInput"
                   name="imageLink"
                   onChange={ this.updateImageUrlInput }
                   placeholder="Enter Image URL"
                   type="url"
                   value={ this.state.image }/>
            <input className="titleInput"
                   name="title"
                   onChange={ this.updateTitleInput }
                   placeholder="Enter Post Title Here"
                   value={ this.state.title }/>
            <textarea className="blogTextInput"
                      type="text"
                      name=""
                      value={ this.state.text }
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
