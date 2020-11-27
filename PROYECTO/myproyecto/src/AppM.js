import React, {useState} from 'react'
import UserTable from './components/components-m/UserTable'
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/components-m/AddUserForm';
import EditUserForm from './components/components-m/EditUserForm';
const AppM = () => {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
  //state
  const [users, setUsers] = useState(usersData)


  //agregar usuarios 
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([...users, 
      user
    ])
  }

  //eliminar Usuarios
  const deleteUser = (id) => {
    const arrayFiltrado = (users.filter((user) => user.id !== id));
    setUsers(arrayFiltrado);
  }

  //Editar usuarios 
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser]= useState({
    id: null, name: '', username:''
  });

  const editrow = (user) =>{
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username 
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user=>(user.id ===id ? updateUser :user)))}


  return (
    <div className="container">
      <h1>USUARIOS</h1>
      <div >
        <div >
        
          {
            editing?(
              <div>
                <h2>Editar usuarios</h2>
                <EditUserForm 
                currentUser={currentUser}
                updateUser={updateUser}
                />
              </div>

            ) : (
              <div>
                  <h2>Agregar Usuarios</h2>
          <AddUserForm addUser={addUser}/>
              </div>
            )
          }
          
        
       
        </div>
        <div className="flex-large">
          <h2>Lista de usuarios</h2>
          <UserTable  
          users={users} 
          deleteUser={deleteUser} 
          editrow={editrow}
          />
        </div>
      </div>
    </div>
  )
}

export default AppM