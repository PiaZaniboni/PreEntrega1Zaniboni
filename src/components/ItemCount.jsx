import { useState } from "react";

export default function ItemCount (props){
    let [ count, setCount] = useState(1);

    const { maxStock } = props;
    const min = 1;

    const handleAdd = () => {
        if ( count < maxStock ){
            console.log("Suma"); 
            setCount ( count + 1 );
        }
    }
    
    const handleSubstract = () => {
        if ( count > min){
            console.log("Resta");
            setCount ( count -1 );
        }
    }

    console.log("Renderizamos: ", count );

    return (
        <div>
            <button onClick={handleAdd}>+</button>
                <span>{count}</span>
            <button onClick={handleSubstract}>-</button>
        </div>
    );

}