import getAsyncData, {getAsyncItemByCategory} from "../data/getAsyncData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer (props) {
    const [ products, setProducts ] = useState([]);
    const { catid } = useParams();

    const categoryName = (catid === undefined) ?  '' : catid ;
    useEffect ( ()=> {
        const respuestaPromise = (catid === undefined) ? getAsyncData() : getAsyncItemByCategory(catid);
        respuestaPromise
            .then( (respuesta)=> setProducts(respuesta) )
            .catch( (error)=> alert(error));
    },[catid]);

    return (
        <ItemList greeting={props.greeting + categoryName } products={products} />
    );

}

export default ItemListContainer;