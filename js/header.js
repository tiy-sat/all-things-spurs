import React from 'react';

export default React.createClass({

  render () {
    return (

      <header>
       <div className="div_logo">
         <img src="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/spurs/Schad/img/PostgameTeams/SAS.png"
         alt="spur"
         className=" spur1">


        <img src="https://s-media-cache-ak0.pinimg.com/originals/f4/fd/be/f4fdbeed1a5a706fe225a5c4a02042ce.jpg"
        alt="Spurs Logo"
        className="logo">

        <img src="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/spurs/Schad/img/PostgameTeams/SAS.png"
        alt="spur"
        className="spur2">

        <div className="div_signin">
          <h2>
            <a href="#" className="signin">SIGN IN</a>
             |
            <a href="#" classNAme="signout">SIGN OUT</a>
          </h2>
        </div>
       </div>
    )
  }
})
