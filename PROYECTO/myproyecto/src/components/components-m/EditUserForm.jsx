import React from 'react';
import { useForm } from 'react-hook-form'
const EditUserForm = (props) => {
   // console.log(props.currentUser);
    const { register, handleSubmit, errors, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.name);

    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
        e.target.reset();
    }

    return (

      <div className="row">
       <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label>Nombre</label>
            <input className="form-control" type="text" name="name" ref={
            register ({
              required: {value:true, message: 'Campo Requerido'}
            })
          } />
        </div>
              <span >
              {errors?.name?.message}
              </span>

              <div className="form-group">
                <label>Nombre de Usuario</label>
                <input className="form-control" type="text" name="username" ref={
                    register ({
                      required: {value:true, message: 'Campo Requerido'}
                    })
                }/>
              </div>  
              <span >
              {errors?.username?.message}
              </span>

              <div className="form-group">
                <button className="btn btn-primary"
                  type="submit">Editar Usuario</button>
              </div>
    </form>
   
          </div>
          </div>
      </div>
    </div>
    
    )
}

export default EditUserForm
