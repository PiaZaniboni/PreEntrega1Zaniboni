import { useContext, useState } from "react";
import cartContext from "../storage/cartContext";
import { createBuyOrderWithStockUpdate } from "../data/database";
import { useNavigate } from "react-router-dom";

export default function CartCheckout (props) {
    const [ errorMessage, setErrorMessage ] = useState(null);
    const [ successMessage, setSuccessMessage ] = useState(null);
    const { cartItems, getTotalPrice, clearCart } = useContext(cartContext);
    const navigate = useNavigate();

    async function handleCheckout () {
        setErrorMessage(null);
        setSuccessMessage(null);

        const orderData = {
            buyer: {
                name: "bruno",
                email: "mail"

            },
            cartItems,
            total: getTotalPrice(),
            data: new Date()
        }

        createBuyOrderWithStockUpdate(orderData)
            .then((respuesta) => {
                setTimeout(() => {
                    clearCart();
                    setSuccessMessage(`Compra realizada con éxito. Espere un momento`);

                    if (respuesta !== null) {
                        navigate(`/orderconfirmation/${respuesta}`); 
                    }
                }, 200);
            })
            .catch((error) => {
                setErrorMessage(error.message || "Ocurrió un error en la compra.");
         });
    }


    return (
        <div>
            <button onClick={handleCheckout}>Finalizar compra</button> 
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
    );
} 