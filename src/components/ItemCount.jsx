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
        <div className="bg-slate-100 rounded-sm px-2 flex items-center">
            <Button estilos={estilos} handleClick={handleSubstract}>-</Button>
                <span className="mx-3 min-w-[10px]">{count}</span>
            <Button estilos={estilos} handleClick={handleAdd}>+</Button>
        </div>
               
        <Button estilos="rounded-[5px] bg-slate-950 px-4 py-2 text-white ml-4" handleClick={handleClick}>Agregar al carrito</Button>
        </>
    );
}