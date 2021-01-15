import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'

import useMusicPlayer from '../hooks/useMusicPlayer'

const PlayerControls = () => {
  const { isPlaying, currentTrackName, togglePlay,
          playPreviousTrack, playNextTrack} = useMusicPlayer()

  return (
    <div className="d-flex justify-content-center mt-4">
      <button className="btn btn-info mr-1"
              type="button"
              onClick={playPreviousTrack}
              disabled={!currentTrackName} >
        <FontAwesomeIcon icon={faStepBackward} />
        {' '}Previous
      </button>

      <button className="btn btn-info mr-1"
              type="button"
              onClick={togglePlay}
              disabled={!currentTrackName} >
        {isPlaying
          ? <FontAwesomeIcon icon={faPause} />
          : <FontAwesomeIcon icon={faPlay} />
        }
      </button>

      <button className="btn btn-info"
              type="button"
              onClick={playNextTrack}
              disabled={!currentTrackName}>
        Next {' '}
        <FontAwesomeIcon icon={faStepForward} />
      </button>
    </div>
  )
}

export default PlayerControls
