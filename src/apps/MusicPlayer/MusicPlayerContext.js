import React, { useState, createContext } from 'react'

import ClearDay from './assets/ClearDay.mp3'
import HappyRock from './assets/HappyRock.mp3'
import JazzyFrenchy from './assets/JazzyFrenchy.mp3'

const MusicPlayerContext = createContext([ {}, () => {} ])

const MusicPlayerProvider = ({ children }) => {
  const [ state, setState ] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Clear Day - Motivational piano/rock',
        file: ClearDay
      },
      {
        name: 'Happy Rock - An uplifting and happy rock',
        file: HappyRock
      },
      {
        name: 'Jazzy Frenchy - Gypsy french jazz',
        file: JazzyFrenchy
      }
    ],
    currentTrackIndex: null,
    isPlaying: false
  })

  return (
    <MusicPlayerContext.Provider value={[ state, setState ]}>
      { children }
    </MusicPlayerContext.Provider>
  )
}

export { MusicPlayerContext, MusicPlayerProvider }
