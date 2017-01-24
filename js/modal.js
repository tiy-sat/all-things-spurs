import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="modalPosition">
        <div className={this.props.isModalOpen() ? "visible" : "hidden"}>
          <div className="modalBackground">
            <h2 className="postTitle">{this.props.postData.title}</h2>
            <img className="accordion_img" src={this.props.postData.image}/>
            <h2 className="userName">{this.props.postData.name}</h2>
            <h3 className="postDate">{this.props.postData.date}</h3>
            <p className="blogText">{this.props.postData.text}</p>
            <p>
              <button className="clickhere_button" onClick={() => this.props.closeModal()}>
                Close
              </button>  
            </p>
          </div>
        </div>
      </div>
    )
  }
})
