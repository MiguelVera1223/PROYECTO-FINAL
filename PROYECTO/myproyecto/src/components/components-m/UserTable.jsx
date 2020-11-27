import React from 'react'

const UserTable = (props) => {
    console.log(props.users);
    return (
        <table className="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th>Nombre</th>
        <th>Usuario Nombre</th>
        <th>Accion</th>
      </tr>
    </thead>
    <tbody>
    {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="btn btn-dark"
              onClick= {
                  ()=>{props.editrow(user)}
              }
              
              
              >Editar</button>
              
              
              <button 
               class="btn btn-danger"
              onClick={()=>{props.deleteUser(user.id)}}
              >
                  Eliminar
                </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No existe usuarios</td>
        </tr>
      )}
    </tbody>
  </table>
    )
}

export default UserTable
