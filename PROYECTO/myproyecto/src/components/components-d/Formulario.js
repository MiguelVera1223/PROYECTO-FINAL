import React, {useState} from 'react';


const Formulario = () => {
    
    const [formulario, setFormulario ] = useState(
         {
        codigo : "",
        nombre: ""

         }
    );

    const handleChange = (e) =>{
        
        let campo = e.target.name;
        setFormulario(
            {
                ...formulario,
                [campo]: e.target.value
            }
            
        );
    }

    const submit = (e) =>{
        e.preventDefault();
        
        
    }
    return (
        <div className="row" >
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-body">
                        <form onSubmit={submit}>
                        <div className="form-group">
                                <label htmlFor="">Codigo :</label>
                                <input type="text"
                                 className="form-control"
                                 placeholder="Ingrese codigo" 
                                 name="codigo"
                                 value={formulario.codigo}
                                 onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Nombre :</label>
                                <input type="text"
                                 className="form-control"
                                 placeholder="Ingrese su nombre"
                                 name="nombre"
                                 value={formulario.nombre}
                                 onChange={handleChange}
                                  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Stock :</label>
                                <input type="text"
                                 className="form-control"
                                 placeholder="Ingrese stock" 
                                 />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Stock minimo :</label>
                                <input type="text"
                                 className="form-control"
                                 placeholder="Ingrese stock minimo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Categorias :</label>
                                <input type="text"
                                 className="form-control"
                                 placeholder="Ingrese stock minimo" />
                            </div>
                            <div>
                                <button className="btn btn-dark " type="submit">Guardar</button>

                                <button className="btn btn-dark ml-4" > Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario
