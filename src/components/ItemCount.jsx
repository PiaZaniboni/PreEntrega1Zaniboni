import { useState } from "react";
import Button from "./Button";

export default function ItemCount (props){
    let [ count, setCount] = useState(1);

    const estilos = "font-bold" ;

    const min = 1;
    const { maxStock } = props;

    const handleAdd = () => {
        if ( count < maxStock ){
            setCount ( count + 1 );
        }
    }
    
    const handleSubstract = () => {
        if ( count > min){
            setCount ( count -1 );
        }
    }
    
    function handleClick(){
        props.onSubmitCount(count);
    }

    return (
        <>
        <div className="bg-slate-100 rounded-sm px-1">
            <Button estilos={estilos} handleClick={handleSubstract}>-</Button>
                <span className="mx-2">{count}</span>
            <Button estilos={estilos} handleClick={handleAdd}>+</Button>
        </div>
               
        <Button estilos="rounded-[5px] bg-slate-950 px-4 py-2 text-white" handleClick={handleClick}>Agregar al carrito</Button>
        </>
    );
}