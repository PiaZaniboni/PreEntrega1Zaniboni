import { useContext } from "react";
import cartContext from "../storage/cartContext";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";

export default function CartContainer (props){
    const { cartItems, removeItem, clearCart, getTotalPrice } = useContext (cartContext);

    return (
        <>
            <h2 className="mt-20 mb-12 text-center text-4xl font-bold font-sans">Carrito</h2>
            <div className="flex flex-wrap justify-center mx-8">
                { cartItems.length > 0 ? (
                    <>
                     {cartItems.map(item => 
                        <CartItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            count={item.count}
                            price={item.price}
                            img={item.img}
                            handleRemoveItem={removeItem}
                        />
                     )}
                     <div>TOTAL= {getTotalPrice()}</div>
                     <button onClick={clearCart}>Limpiar carrito</button>

                     <CartCheckout />
                    </>
                ) :
                (
                   <h4>No agregaste productos al carrito</h4>
                )
                }
            </div>
        </>
    );
}