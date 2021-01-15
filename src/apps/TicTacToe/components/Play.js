import React, { useState } from 'react'

import Board from './Board'
import CheckForWinner from './CheckForWinner'

const Play = () => {
  const initialization = [{ squares: Array(9).fill(null) }]

  const [ history, setHistory ] = useState(initialization)
  const [ xIsNext, setXIsNext ] = useState(true)
  const [ stepNumber, setStepNumber ] = useState(0)

  const handleClick = (i) => {
    const slicedHistory = history.slice(0, stepNumber + 1)
    const finalStepInSlicedHistory = slicedHistory[slicedHistory.length - 1]
    const updatedBoard = [ ...finalStepInSlicedHistory ]

    const winner = Boolean(CheckForWinner(updatedBoard))
    const boardIsFull = Boolean(updatedBoard[i])

    if (winner || boardIsFull)
      return

    updatedBoard[i] = xIsNext ? 'X' : 'O'
    const newHistory = [ ...slicedHistory, { squares: updatedBoard }]

    setHistory(newHistory)
    setXIsNext(!xIsNext)
    setStepNumber(slicedHistory.length)
  }

  const jumpTo = (step) => {
    setStepNumber(step)
    const isEvenStepNumber = step % 2 === 0
    setXIsNext(isEvenStepNumber)
  }

  const currentStep = history[stepNumber]
  const winner = CheckForWinner(currentStep.squares)

  const status = winner
    ? `Winner: ${iwinner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={currentStep.squares} onClick={ => handleClick(i)} />
        </div>

        <div className="game-info">
          <div>{ status }</div>
        </div>
      </div>
    )
}

export default Play
