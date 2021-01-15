import React, { useReducer, createContext } from 'react'
import uuid from 'uuid/v4'

import Filter from './components/Filter'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

const DispatchContext = createContext(null)

const initialTodos = [
  {
    id: uuid(),
    task: 'Morning workout',
    complete: true
  },
  {
    id: uuid(),
    task: 'Movie marathon',
    complete: false
  },
  {
    id: uuid(),
    task: 'Cook dinner',
    complete: false
  }
]

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL'

    case 'SHOW_COMPLETE':
      return 'COMPLETE'

    case 'SHOW_INCOMPLETE':
      return 'INCOMPLETE'

    default:
      return state
  }
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id)
          return { ...todo, complete: true }
        else
          return todo
      })

    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id)
          return { ...todo, complete: false }
        else
          return todo
      })

    case 'ADD_TODO':
      return [ ...state, { task: action.task, id: action.id, complete: false }]

    default:
      return state
  }
}

const useCombineReducer = (reducers) => {
  const state = Object.keys (reducers).reduce(
    (acc, key) => ({ ...acc, [key]: reducers[key][0]}),
    {}
  )

  const dispatch = action => (
    Object.keys (reducers)
      .map(key => reducers[key][1])
      .forEach(fn => fn(action))
  )

  return [ state, dispatch ]
}

const App = () => {
  const [ state, dispatch ] = useCombineReducer({
    filter: useReducer(filterReducer, 'ALL'),
    todos:  useReducer(todoReducer, initialTodos)
  })

  const { filter, todos } = state

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL')
      return true

    if (filter === 'COMPLETE' && todo.complete)
      return true

    if (filter === 'INCOMPLETE' && !todo.complete)
      return true

    return false
  })

  return (
    <DispatchContext.Provider value={{ state, dispatch }}>
       <div className="card">
          <div className="card-body">
            <AddTodo />
            <TodoList todos={filteredTodos} />
          </div>

          <div className="card-footer text-muted">
            <Filter state={state} dispatch={dispatch} />
          </div>
      </div>
    </DispatchContext.Provider>
  )
}

export { DispatchContext, App }
