import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
const AddUserForm = (props) => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
       /// console.log(data)
        props.addUser(data)
        e.target.reset();
        Swal.fire({
          title: "Creado!",
          text: "Usuario creado correctamente",
          icon: "success",
          timer: 2000
        })
    }

    return (
      
      <div className="row">
       <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
           <form onSubmit={handleSubmit(onSubmit)}>
            <p>En el módulo USUARIO podrá registrar nuevos usuarios en el sistema ya sea un 
              administrador o un encargado, también podrá ver la lista de usuarios registrados,
               buscar usuarios en el sistema, actualizar datos de otros usuarios y los suyos.</p>
                <div className="form-group">
                  <label>Nombre</label>
                  <input  className="form-control" type="text" name="name" ref={
                      register ({
                        required: {value:true, message: 'Campo Requerido'}
                      })
                  }
                  />
                  </div>
                  <span >
                  {errors?.name?.message}
                  </span>

                  <div className="form-group">
                  <label>Nombre de Usuario</label>
                  <input  className="form-control" type="text" name="username" ref={
                      register ({
                        required: {value:true, message: 'Campo Requerido'}
                      })
                    }
                    />
                  </div>
              <span >
              {errors?.username?.message}
              </span>
              <div className="form-group">
                <button className="btn btn-primary"
                  type="submit">Crear Usuario</button>
              </div>
              </form>
             </div>
          </div>
        </div>
    </div>
    )
}

export default AddUserForm
