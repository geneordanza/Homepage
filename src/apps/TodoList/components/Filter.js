import React from 'react'

const Filter = ({ state, dispatch }) => (
  <div>
    <div className="float-left">
      <button type="button" disabled
              className="btn btn-outline-dark btn-sm border-0"
              onClick={() => dispatch({ type: 'SHOW_ALL'}) }>
        {state.todos.length} Items
      </button>
    </div>

    <div className="float-right">
      <button type="button"
              className="btn btn-outline-dark btn-sm border-0"
              onClick={() => dispatch({ type: 'SHOW_ALL'})} >
        All
      </button>

      <button type="button"
              className="btn btn-outline-dark btn-sm border-0"
              onClick={() => dispatch({ type: 'SHOW_COMPLETE'}) }>
        Completed
      </button>

      <button type="button"
              className="btn btn-outline-dark btn-sm border-0"
              onClick={() => dispatch({ type: 'SHOW_INCOMPLETE'}) }>
        Pending
      </button>
    </div>
  </div>
)

export default Filter
