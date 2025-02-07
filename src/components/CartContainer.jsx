import { useContext } from "react";
import cartContext from "../storage/cartContext";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";

export default function CartContainer (props){
    const { cartItems, removeItem, clearCart, getTotalPrice } = useContext (cartContext);

    return (
        <>
            <h2 className="mt-20 mb-12 text-center text-4xl font-bold font-sans">Carrito</h2>
            <div className="flex flex-wrap justify-center max-w-[1200px] mx-auto">
                { cartItems.length > 0 ? (
                    <>
                    <table className="min-w-full table-auto border-collapse font-sans">
                    <thead>
                        <tr className="bg-[#ffbbff61]">
                        <th className="px-4 py-2 border">Foto</th>
                        <th className="px-4 py-2 border">Título</th>
                        <th className="px-4 py-2 border">Precio</th>
                        <th className="px-4 py-2 border">Cantidad</th>
                        <th className="px-4 py-2 border">Subtotal</th>
                        <th className="px-4 py-2 border">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
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
                     </tbody>
                     </table>
                     <div className="min-w-full mt-8 flex justify-between items-center">
                        <button className="rounded-[5px] font-bold bg-[#de0f0f] px-4 py-2 text-white ml-4" onClick={clearCart}>Limpiar carrito</button>
                        <span className="font-semibold text-xl text-gray-900">Total de la compra:  ${getTotalPrice().toFixed(2)}</span>
                     </div>
                     <CartCheckout />
                    </>
                ) :
                (
                   <h4 className="font-bold italic">No agregaste productos al carrito</h4>
                )
                }
            </div>
        </>
    );
}