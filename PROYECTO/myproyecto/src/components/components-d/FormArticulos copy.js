import React, {useState} from 'react'
import Swal from "sweetalert2";
import { postArticulo } from './services/ArticuloServices';

const formularioVacio = { 
        codigo: "",
        nombre : "",
        stock : 0,
        stockm: 0,
        categorias: 0,
        estado : false,
        descripcion:""   
}

const FormArticulos = ({traerArticulo}) => {

     const [formulario, setformulario] = useState(formularioVacio);
     const [modo, setModo] = useState("crear");

     const handleChange = (e) =>{
        let valor = e.target.type  === "checkbox" ? e.target.checked : e.target.value;
        setformulario({
            ...formulario,
            [e.target.name]: valor

        })
     }

     const handleSubmit = (e) =>{
       e.preventDefault();
       if(modo === "crear"){
        Swal.fire({
          title: "¿Registrar articulo?",
          text: "Se guardara en la base de datos ",
          icon :"question",
          showCancelButton:true
        }).then(({isConfirmed}) =>{
          if(isConfirmed){
            postArticulo(formulario).then(data =>{
              if(data.id_articulo){
                traerArticulo();
                setformulario(formularioVacio);
                Swal.fire({
                  title:"Registrado",
                  text:"Mascota registrado correctamente",
                  icon: "success",
                  timer: 1500
                });
              }
            })
          }
        })
       }
     }

    return (
    
            <div className="row mt-4">
              <div className="col-12">
                <div className="card shadow">
        ​
                  <div className="card-body">
                    <form className="row" onSubmit={handleSubmit}>
                      <div className="form-group col-md-6">
                        <label htmlFor="">Codigo:</label>
                        <input type="text" className="form-control"
                          placeholder="Ingrese codigo"
                          name="codigo"
                          onChange={handleChange}
                          value={formulario.codigo} />
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="">Nombre del articulo:</label>
                        <input type="text" className="form-control"
                          placeholder="Ingrese nombre del articulo"
                          name="nombre"
                          onChange={handleChange}
                          value={formulario.nombre} />
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="">Stock</label>
                        <input type="number" className="form-control"
                            name="stock"
                        onChange={handleChange}
                        value={formulario.stock} />
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="">Stock Minimo</label>
                        <input type="number" className="form-control"
                        name="stockm"
                        onChange={handleChange}
                        value={formulario.stockm} />
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="">Categorias:</label>
                        <select className="form-control" 
                            name="categorias"
                             value={formulario.categorias}>
                          <option value="0">Seleccione categoria</option>
                          <option value="1">Mesa</option>
                        </select>
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor=""  >Estado:</label>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <input type="checkbox"
                              checked={formulario.estado}
                               name="estado"
                               onChange={handleChange}
                               aria-label="Checkbox for following text input" 
                               id="checkActivo" />
                            </div>
                          </div>
                          <label htmlFor="checkActivo" class="form-control" >Activo</label>
                        </div>
                      </div>

        ​              <div className="form-group col-md-6"> 
                        <label htmlFor=""  >Descripcion:</label>
                        <input type="textarea" className="form-control"
                          placeholder="Ingrese descripcion"
                          name="descripcion"
                          onChange={handleChange}
                          value={formulario.descripcion}/>
                        </div>
                        <div>
                            .
                        </div>
                        <div className="form-group col-md-6">
                            <button className="btn btn-block btn-primary" type="submit">Registrar</button>
                            </div>
                        <div className="form-group col-md-6">
                            <button className="btn btn-block btn-danger" type="button">Cancelar</button>
                        </div> 
                          
                    </form>
                  </div>      ​
                </div>
              </div>     ​
            </div>
          )
}

export default FormArticulos
