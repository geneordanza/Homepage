import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// TODO: Migrate bootstrap to react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './css/resume.css'

import { Sidebar, MainBody, About, Skills, ToyApps } from './component'
import * as apps from './apps'

const App = () => (
  <BrowserRouter>
    <Sidebar />
    <div className="container-fluid p-0">
      <Switch>
        <Route path="/" exact component={MainBody} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/toyapps" component={ToyApps} />

        <Route path="/meme" component={apps.MemeGenerator} />
        <Route path="/quotes" component={apps.Quotes} />
        <Route path="/musicplayer" component={apps.MusicPlayer} />
        <Route path="/tictactoe" component={apps.TicTacToe} />
        <Route path="/contact" component={apps.ContactList} />
        <Route path="/todolist" component={apps.TodoList} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
