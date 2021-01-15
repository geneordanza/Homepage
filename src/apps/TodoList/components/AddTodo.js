import React, { useState, useContext } from 'react'
import uuid from 'uuid/v4'

import { DispatchContext} from '../App'

const AddTodo = () => {
  const { dispatch } = useContext(DispatchContext)

  const [ task, setTask ] = useState('')

  const handleSubmit = (event) => {
    if (task)
      dispatch({ type: 'ADD_TODO', task, id: uuid() })

    setTask('')
    event.preventDefault()
  }

  const handleChange = (event) => setTask(event.target.value)

  return (
    <form onSubmit={handleSubmit}
          className="form-inline d-flex justify-content-center">
      <input type="text"
             placeholder="Add new task"
             className="form-control"
             value={task}
             onChange={handleChange} />

      <button type="submit" className="btn btn-info ml-1">
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
