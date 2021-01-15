import React from 'react'

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    { value }
  </button>
)

const Board = ({ squares, onClick }) => {
  const renderSquare = i => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  )

  return (
    <>
      <div className="board-row">
        { renderSquare(0) }
        { renderSquare(1) }
        { renderSquare(2) }
      </div>
      <div className="board-row">
        { renderSquare(3) }
        { renderSquare(4) }
        { renderSquare(5) }
      </div>
      <div className="board-row">
        { renderSquare(6) }
        { renderSquare(7) }
        { renderSquare(8) }
      </div>
    </>
  )
}

export default Board
