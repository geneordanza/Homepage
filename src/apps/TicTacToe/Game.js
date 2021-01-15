import React, { useState } from 'react'

import CheckForWinner from './components/CheckForWinner'
import DisplayBoard from './components/DisplayBoard'

const Game = () => {
  const initialHistory = [{ squares: Array(9).fill(null) }]

  const [ history, setHistory ] = useState(initialHistory)
  const [ xIsNext, setXIsNext ] = useState(true)
  const [ stepNumber, setStepNumber ] = useState(0)

  const handleClick = (i) => {
    const listOfBoards = history.slice(0, stepNumber + 1)
    const currentBoard = listOfBoards[listOfBoards.length - 1]
    const boardContent = [ ...currentBoard.squares ]

    const winner = Boolean(CheckForWinner(boardContent))
    const squareAlreadyFilled = Boolean(boardContent[i])

    if (winner || squareAlreadyFilled)
      return

    boardContent[i] = xIsNext ? 'X' : 'O'
    const updatedBoards = [ ...listOfBoards, { squares: boardContent }]

    setHistory(updatedBoards)
    setXIsNext(!xIsNext)
    setStepNumber(listOfBoards.length)
  }

  const currentStep = history[stepNumber]
  const winner = CheckForWinner(currentStep.squares)

  console.log ("currentStep:", currentStep)

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`

  return (
    <DisplayBoard status={status}
                  handleClick={handleClick}
                  currentStep={currentStep} />
  )
}

export default Game
