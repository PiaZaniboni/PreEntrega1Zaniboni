import { useContext, useState } from "react";
import cartContext from "../storage/cartContext";
import { createBuyOrderWithStockUpdate } from "../data/database";
import { useNavigate } from "react-router-dom";

export default function CartCheckout (props) {
    const [ errorMessage, setErrorMessage ] = useState(null);
    const [ successMessage, setSuccessMessage ] = useState(null);
    const { cartItems, getTotalPrice, clearCart } = useContext(cartContext);
    const navigate = useNavigate();

    const styleInput = "border border-gray-300 p-2 rounded-md flex-1 bg-white";

    const [userData, setUserData] = useState({
        username: "",
        surname: "",
        age: "",
      });
    
    function onInputChange(evt) {
        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = evt.target.value;
        setUserData(newUserData);
    }

    async function handleCheckout (evt) {
        evt.preventDefault();

        console.log("hola");
        setErrorMessage(null);
        setSuccessMessage(null);

        const orderData = {
            buyer: {
                username: userData.username,
                surname: userData.surname,
                age: userData.age,
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
        <form>
        <div className="flex mb-2">
            <label className="w-[100px] mr-2">Nombre</label>
            <input
            name="username"
            type="text"
            onChange={onInputChange}
            className={styleInput}
            />
        </div>

        <div className="flex mb-2">
            <label className="w-[100px] mr-2">Apellido</label>
            <input
            name="surname"
            type="text"
            onChange={onInputChange}
            className={styleInput}
            />
        </div>

        <div className="flex mb-2">
            <label className="w-[100px] mr-2">Edad</label>
            <input
            name="age"
            type="text"
            onChange={onInputChange}
            className={styleInput}
            />
        </div>

        <button className="rounded-[5px] bg-slate-950 px-4 py-2 text-white ml-4 mt-14" 
            disabled={!( userData.username !== "" && userData.surname !== "" && userData.age !== "")}
            onClick={handleCheckout}
        >
            Finalizar compra
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </form>
    );
} 