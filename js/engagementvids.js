import React from 'react';

export default React.createClass({

  render () {
    return (
      <section className="video_section">
        <div className="video_player_container">
          <div className="NBA_video_full_section">
            <iframe className="NBA_game_highlights"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/GPOQcE5B_Vk"
                    frameborder="0"
                    allowfullscreen>
            </iframe>
          </div>
          <h2 className="game_description"> SPURS GAME HIGHLIGHTS
          </h2>
        </div>
      </section>
    )
  }
})
