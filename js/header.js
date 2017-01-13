import React from 'react';

export default React.createClass({

  render () {
    return (

      <header className="header">
       <div className="div_logo">
         <img src="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/spurs/Schad/img/PostgameTeams/SAS.png"
         alt="spur"
         className=" spur1"/>

        <img src="http://hdwpp.net/a/1920x1080/g/764/s3/spurs-theme-vl11.jpg"
        alt="Spurs Logo"
        className="logo"/>

        <img src="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/spurs/Schad/img/PostgameTeams/SAS.png"
        alt="spur"
        className="spur2"/>
        <div className="div_signin">
          <h2>
            <a href="#" className="signin">SIGN IN</a>
          </h2>
        </div>
      </div>
      </header>
    )
  }
})
