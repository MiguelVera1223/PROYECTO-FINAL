import axios from "axios"
import { URL_BACKEND } from "../environments/environments"


export const getArticulo = async () => {
    const resultado = await axios.get(`${URL_BACKEND}/Articulo`);
    return resultado.data;
}

export const postArticulo = async (objArticulo) =>{
    const resultado = await axios.post(`${URL_BACKEND}/Articulo`,
            JSON.stringify(objArticulo),{
                headers:{
                    "Content-type":"application/json"
                }
            });
            return resultado.data;

}

export const deleteArticuloById = async (id) =>{
   /*  const respuesta = await axios.delete(`${URL_BACKEND}/Articulo/${id}`);
    return respuesta.data; */

    const peticion = await fetch(`${URL_BACKEND}/Articulo/${id}`, {method: "DELETE"});
    const json = await peticion.json();
    return json
}

export const putArticulo = async (objArticulo) =>{

    const respuesta = await axios.put(`${URL_BACKEND}/Articulo/${objArticulo.id_articulo}`, 
        JSON.stringify(objArticulo),{
            headers:{"Content-type":"Application/json" }
        });
        return respuesta;

}