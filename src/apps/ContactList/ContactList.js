import React, { useState, useReducer } from 'react'
import uuid from 'uuid/v4'

import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

import BodyTemplate from '../../component/BodyTemplate'

//import './contact.css'

const userData = [
  { id: uuid(), name: 'Gene',  desc: 'Developer', mobile: '092712345678'},
  { id: uuid(), name: 'Paolo', desc: 'Gamer',    mobile: '092712345678'},
  { id: uuid(), name: 'CJ',    desc: 'Chef',    mobile: '092712345678'},
]

const usersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      action.user.id = uuid()
      return [ ...state, action.user ]

    case 'DELETE_USER':
      return state.filter(user => user.id !== action.id)

    case 'UPDATE_USER':
      return state.map(user => (user.id === action.id ? action.updatedUser : user))

    default:
      return state
  }
}

const editReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRUE':
      return true

    case 'SET_FALSE':
      return false

    default:
      return state
  }
}

const ContactList = () => {
  const initialFormState = { id: null, name: '', desc: '', mobile: '' }

  const [ accounts, dispatch ] = useReducer(usersReducer, userData)
  const [ editing, setEditing ] = useReducer(editReducer, false)
  const [ currentUser, setCurrentUser ] = useState(initialFormState)

  const addUser = user => dispatch({ type: 'ADD_USER', user })

  const updateUser = (id, updatedUser) => {
    setEditing({ type: 'SET_FALSE' })
    dispatch({ type: 'UPDATE_USER', id, updatedUser })
  }

  const deleteUser = id => dispatch({ type: 'DELETE_USER', id })

  const editRow = (user) => {
    setEditing({ type: 'SET_TRUE' })
    setCurrentUser({
      id: user.id,
      name: user.name,
      desc: user.desc,
      mobile: user.mobile
    })
  }

  const EditUser = (
    <div>
      <h3 className="text-center">Edit User</h3>
      <EditUserForm editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
      />
    </div>
  )

  const AddNewUser = (
    <div>
      <h3 className="text-center">Add user</h3>
      <AddUserForm addUser={addUser} initialState={initialFormState} />
    </div>
  )

  const ViewUser = (
    <div>
      <h3 className="text-center">User Directory Listings</h3>
      <UserTable users={accounts} editRow={editRow} deleteUser={deleteUser} />
    </div>
  )

  return (
    <BodyTemplate title={'Contact List'}>
    <div className="">
      <div className="flex-row">
        <div className="flex-large">
          { ViewUser }
        </div>
        <div className="flex-large">
          {
            editing
              ? EditUser
              : AddNewUser
          }
        </div>
      </div>
    </div>
    </BodyTemplate>
  )
}

export default ContactList
