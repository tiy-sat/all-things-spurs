import React from 'react';


export default React.createClass({

  render () {
    return (
        <form className="blogPostForm" action="index.html" method="post">
          <input className="userNameInput" type="text" name="userName" value="" placeholder="Enter User Name"/>
          <input className="postDateInput" type="date" name="postDate" value=""/>
          <input className="imageUrlInput" type="url" name="imageLink" value="" placeholder="Enter Image URL"/>
          <textarea className="blogTextInput"type="text" name="" value="" placeholder="Enter blog post here"></textarea>
          <input className="submitPost" type="submit" name="" value="Submit Post"/>
          </form>
      )
  }
})
