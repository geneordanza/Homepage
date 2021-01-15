import React from 'react'

import Board from './Board'

const DisplayBoard = ({ status, handleClick, currentStep }) => {
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentStep.squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{ status }</div>
      </div>
    </div>
  )
}

export default DisplayBoard
