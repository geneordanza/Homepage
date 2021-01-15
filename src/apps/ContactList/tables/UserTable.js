import React from 'react'

const UserTable = ({ users, editRow, deleteUser }) => {
  const userList = users.map(user => (
    <tr key={user.id}>
      <td>
        <div onClick={() => editRow(user)}>
          { user.name } <span className="badge badge-info">edit</span>
        </div>
      </td>
      <td>{ user.desc }</td>
      <td>{ user.mobile }</td>
      <td>
        <button className="btn btn-sm btn-light border"
                onClick={() => deleteUser(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  ))

  const noUsers = (
    <tr>
      <td colSpan={3}>No users</td>
    </tr>
  )

  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Desc</th>
        <th>Mobile</th>
      </thead>

      <tbody>
        { users.length > 0 ? userList : noUsers }
      </tbody>
    </table>
  )
}

export default UserTable
