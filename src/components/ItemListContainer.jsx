import getAsyncData, {getAsyncItemByCategory} from "../data/database";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";


function ItemListContainer (props) {
    const [ products, setProducts ] = useState(null);
    const { catid } = useParams();

    const categoryName = (catid === undefined) ?  '' : catid ;
    useEffect ( ()=> {
        const respuestaPromise = (catid === undefined) ? getAsyncData() : getAsyncItemByCategory(catid);
        respuestaPromise
            .then( (respuesta)=> setProducts(respuesta) )
            .catch( (error)=> console.log(error));
    },[catid]);

    if (products) return <ItemList greeting={props.greeting + categoryName } products={products} />;
    else return <Loader/>;

}

export default ItemListContainer;