//Icono de carrito con una notificacion mostrando nuemero harcodeado (fijo)

export default function CartWidget (props) {

    const numProducts = 1;// cuando cambie deberia ser let

    return (
        <>
            Carrito 
            <span>{numProducts}</span>
        </>
    );
}