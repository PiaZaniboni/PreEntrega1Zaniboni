import { FaShoppingCart } from "react-icons/fa";

//Icono de carrito con una notificacion mostrando nuemero harcodeado (fijo)

export default function CartWidget (props) {

    const numProducts = 1;// cuando cambie deberia ser let

    return (
        <> 
            <div className="flex"> <FaShoppingCart /> <span>{numProducts}</span> </div>
        </>
    );
}