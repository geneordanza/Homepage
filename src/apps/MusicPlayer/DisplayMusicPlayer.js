import React from 'react'

import useMusicPlayer from './hooks/useMusicPlayer'
import TrackList from './component/TrackList'
import PlayerControls from './component/PlayerControls'

const DisplayMusicPlayer = () => {
  const { currentTrackName} = useMusicPlayer()

  return (
    <>
      <div className="card mt-2">
        <div className="card-header text-center">
          <h4>{ currentTrackName }</h4>
        </div>

        <div className="card-body">
          <TrackList />
          <PlayerControls />
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Music Copyright: <a href="https://bensound.com">Bensound</a>
      </div>
    </>
  )
}

export default DisplayMusicPlayer
