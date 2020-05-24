import React from 'react'
import './player.css'
import MiniPlayer from './mini-player/MiniPlayer'
import Interactable from 'react-interactable/noNative'

function Player() {
  return (
    <div id="player-cont">
      <Interactable.View
      verticalOnly={true}
      snapPoints={[{y: 0}, {y:-720}]}
      >
        < MiniPlayer />
      </Interactable.View>
    </div>
  )
}


export default Player;
