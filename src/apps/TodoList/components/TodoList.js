import React, { useContext } from 'react'

import { DispatchContext } from '../App'

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(DispatchContext)

  const handleChange = () => (
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id:   todo.id
    })
  )

  const lineThrough = {
    textDecoration: todo.complete ? "line-through" : ""
  }

  return (
    <div className="mt-w">
      <li style={{ listStyleType: "none" }}>
        <div className="input-group">
          <input type="checkbox"
                 className="mr-1"
                 checked={todo.complete}
                 onChange={handleChange} />
          <div style={lineThrough} >
            { todo.task }
          </div>
        </div>
      </li>
    </div>
  )
}

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
)

export default TodoList
