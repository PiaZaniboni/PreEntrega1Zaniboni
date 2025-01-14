import { useState } from "react";

export default function ItemCount (props){
    let [ count, setCount] = useState(1);

    const estilos = "font-bold" ;

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
        <div className="bg-slate-100 rounded-sm px-1">
            <button className={estilos} onClick={handleSubstract}>-</button>
                <span className="mx-2">{count}</span>
            <button className={estilos} onClick={handleAdd}>+</button>
        </div>
    );

}