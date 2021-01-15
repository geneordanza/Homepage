import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [ user, setUser ] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateUser(user.id, user)
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text"
             placeholder=".."
             name="name"
             value={user.name}
             onChange={handleInputChange} />

      <label>Description</label>
      <input type="text"
             placeholder=".."
             name="desc"
             value={user.desc}
             onChange={handleInputChange} />

      <label>Mobile Number</label>
      <input type="text"
             placeholder=".."
             name="mobile"
             value={user.mobile}
             onChange={handleInputChange} />

      <button type="submit" className="btn btn-sm mr-1">Update User</button>

      <button className="btn btn-sm"
              type="submit"
              onClick={() => props.setEditing({ type: 'SET_FALSE'} )} >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
