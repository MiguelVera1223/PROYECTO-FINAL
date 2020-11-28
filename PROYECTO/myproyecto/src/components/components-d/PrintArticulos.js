import React, {useState, useEffect} from 'react'
import FormArticulos from './FormArticulos'
import { getArticulo } from './services/ArticuloServices'
import TablaArticulo from './TablaArticulo'
 
const PrintArticulos = () => {


    const [articulo,setArticulo] = useState([]);
    const [articuloEditar, setArticuloEditar] = useState(null);

    const traerArticulo = async () =>{
        const data = await getArticulo();
        setArticulo(data);
    }
    useEffect(() =>{
        traerArticulo();
    },[]);


    return (
        <>
            
        <FormArticulos traerArticulo={traerArticulo}
                        articuloEditar={articuloEditar}/>
        <TablaArticulo articulo={articulo}
                     traerArticulo={traerArticulo}
                     setArticuloEditar = {setArticuloEditar}
                        />

        </>
    )
}

export default PrintArticulos
