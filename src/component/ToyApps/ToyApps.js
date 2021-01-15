import React from 'react'
import { Link } from 'react-router-dom'

import BodyTemplate from '../BodyTemplate'

const ToyApps = () => (
  <BodyTemplate title={'Toy Apps'}>
    <h5 className="d-inline">
      <Link to="/meme">Meme Generator</Link>
      <p className="lead d-inline pl-2">using Imgflip API to generate images</p>
      <br />

      <Link to="/quotes">Quotes</Link>
      <p className="lead d-inline pl-2">Famous Quotes from Filipino Presidents</p>
      <br />

      <Link to="/musicplayer">Music Player</Link>
      <p className="lead d-inline pl-2">Simple Music Player</p>
      <br />

      <Link to="/tictactoe">Tic Tac Toe </Link>
      <p className="lead d-inline pl-2">Simple TicTacToe Game</p>
      <br />

      <Link to="/contact">Contact List</Link>
      <p className="lead d-inline pl-2">Simple Contact List</p>
      <br />

      <Link to="/todolist">TodoList</Link>
      <p className="lead d-inline pl-2">TodoList</p>
      <br />
    </h5>
  </BodyTemplate>
)

export default ToyApps
