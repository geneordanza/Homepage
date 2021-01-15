import React, { useState } from 'react'

const AddUserForm = ({ addUser, initialState }) => {
  const [ user, setUser ] = useState({ initialState })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!user.name || !user.desc)
      return

    addUser(user)
    setUser(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="mr-1">Name</label>
      <input type="text"
             name="name"
             value={user.name}
             onChange={handleInputChange} />

      <div className="d-block"></div>
      <label className="mr-1">Description</label>
      <input type="text"
             name="desc"
             value={user.desc}
             onChange={handleInputChange} />

      <div className="d-block"></div>
      <label>Mobile</label>
      <input type="text"
             name="mobile"
             value={user.mobile}
             onChange={handleInputChange} />

      <div className="d-block"></div>
      <button type="submit">Add new user</button>
    </form>
  )
}

export default AddUserForm
