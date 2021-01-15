import React from 'react'

import BodyTemplate from '../../component/BodyTemplate'

import Game from './Game'
import './ttt.css'

const TicTacToe = () => (
  <BodyTemplate title={'Tic Tac Toe'}>
    <Game />
  </BodyTemplate>
)

export default TicTacToe
