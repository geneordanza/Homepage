import React from 'react'

import './musicplayer.css'

import BodyTemplate from '../../component/BodyTemplate'
import DisplayMusicPlayer from './DisplayMusicPlayer'
import { MusicPlayerProvider } from './MusicPlayerContext'

const MusicPlayer = () => (
  <BodyTemplate title={'Music Player'}>
    <MusicPlayerProvider>
      <DisplayMusicPlayer />
    </MusicPlayerProvider>
  </BodyTemplate>
)

export default MusicPlayer
