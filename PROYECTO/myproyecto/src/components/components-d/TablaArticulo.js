import React from 'react'
import {MDBDataTable} from "mdbreact";
import Swal from 'sweetalert2';
import { deleteArticuloById, putArticulo } from './services/ArticuloServices';
import "react-toggle/style.css";
import Toggle from "react-toggle";


const TablaArticulo = ({articulo, traerArticulo, setArticuloEditar}) => {

    const eliminarArticuloPorId = (id) =>{
        Swal.fire({
            title : "¿Eliminar?",
            icon: "error",
            text : "Los cambios serán irreversibles",
            showCancelButton : true
        }).then(({isConfirmed}) =>{
            if(isConfirmed){
                deleteArticuloById(id).then((data) =>{
                    if(data.id_articulo){
                        traerArticulo();
                        Swal.fire({
                            title: "Articulo Eliminado",
                            text : "Articulo eliminado satisfactoriamente",
                            timer : 1500,
                            icon: "success"
                        });
                    }
                })
            }
        })
        

    }

    const handleChangeToggle = (estado, objArticulo)=>{
        
        putArticulo({
            ...objArticulo,
            estado: estado
        }).then(rpta =>{
            if(rpta.status === 200){
                Swal.fire({
                    position:"top-end",
                    icon: "success",
                    title:"Articulo actualizado",
                    showConfirmButton: false,
                    timer:1000
                });
            }
        })
    }

    const data = {
        columns:[
            {label:"Id",field:"id_articulo"},
            {label:"Codigo",field:"codigo"},
            {label:"Nombre",field:"nombre"},
            {label:"Stock",field:"stock"},
            {label:"Stock minimo",field:"stockm"},
            {label:"Categorias",field:"categorias"},
            {label:"Estado",field:"estado"},
            {label:"Descripcion",field:"descripcion"},
            {label:"Acciones",field:"acciones"},
            
        ],
        rows : articulo.map(m =>{
            return {
                ...m,
                estado: <Toggle defaultChecked={m.estado}
                         onChange={(e)=>{
                             handleChangeToggle(e.target.checked, { ...m});
                         }}/>,
                acciones : (<><button className="btn btn-secondary mr-2" onClick={() =>{
                            setArticuloEditar({ ...m});
                             }}>Editar</button>
                            <button className="btn btn-danger" onClick={()=>{
                                eliminarArticuloPorId(m.id_articulo);
                            }}>Eliminar</button></>)
            }
        })
    }

    return (
        <div className="row mt-4">
            <div className="col-12">
                <div className="card shadow">
                <div className="card-body">
                    <MDBDataTable 
                    className="text-center"
                    striped
                    bordered
                    hover
                    data={data}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TablaArticulo
