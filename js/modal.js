import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className={this.props.isModalOpen() ? "visible" : "hidden"}>
        <div>
          <h2>{this.props.postData.title}</h2>
      <p><button onClick={() => this.props.closeModal()}>Close</button></p>
        </div>
      </div>
    )
  }
})
