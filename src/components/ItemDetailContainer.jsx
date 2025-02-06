import { useState, useEffect } from "react";
import { getAsyncItemById } from "../data/database";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer ( props ){

    const [product, setProduct] = useState(null);
    const {id} = useParams();

    useEffect ( ()=>{
        const respuestaPromiseItem = getAsyncItemById(id);

        respuestaPromiseItem
            .then( (respuesta)=> setProduct(respuesta) )
            .catch ((error)=> console.log(error) );
    },[id]);

    if (product) return ( <ItemDetail id={id} {...product} />);
    else return <Loader/>;
}