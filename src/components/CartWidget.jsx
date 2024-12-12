import { FaShoppingCart } from "react-icons/fa";

//Icono de carrito con una notificacion mostrando nuemero harcodeado (fijo)

export default function CartWidget (props) {

    const numProducts = 1;// cuando cambie deberia ser let

    const stylesSpan = 'bg-red-600 rounded-full mt-[-10px] px-[6px] py-[1px] text-xs font-bold';

    return (
        <> 
            <div className="flex items-center border-l-[1px] border-solid pl-4"> <FaShoppingCart /> <span className={stylesSpan} >{numProducts}</span> </div>
        </>
    );
}