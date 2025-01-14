import { useState, useEffect } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer ( props ){

    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect ( ()=>{
        const respuestaPromiseItem = getAsyncItemById(id);

        respuestaPromiseItem
            .then( (respuesta)=> setProduct(respuesta) )
            .catch ((error)=> console.log(error) );
    },[id]);

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    );
}