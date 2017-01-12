import React from 'react';

export default React.createClass({

  render() {
    console.log(this.props.isModalOpen(),"here");
    return (
      <div className={this.props.isModalOpen() ? "visible" : "hidden"}>
        <div>
          <h1>Modal title</h1>
          <p>hello</p>
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </div>
      </div>
    )
  }
})
