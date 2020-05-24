import React from 'react'
import './mini-player.css'

function MiniPlayer() {
  return (
    <div id="mini-player">
      <div id="mini-progress-bar" className="progress-bar"></div>
      <div id="player-art">

        <div className="overlay"></div>
        <span><i className="plyr-btn fas fa-play"></i></span>
        <span><i className="plyr-btn fas fa-pause"></i></span>
      </div>
      <div id="song-info">

        <div className="title">
          <p>Out of Love</p>
        </div>
        <div className="artist">
          <p>Lil Tecca</p>
        </div>
      </div>
      <div className="like-button">

        <i className="far fa-heart"></i>
        <i className="fas fa-heart"></i>
      </div>
    </div>

  )
}

export default MiniPlayer;
