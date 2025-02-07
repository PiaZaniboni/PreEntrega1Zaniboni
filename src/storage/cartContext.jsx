import { createContext, useState } from "react";

const cartContext = createContext("carrito");

export function CartContextProvider (props){
    const [cartItems, setCartItems] = useState([]);

    function addItem( { id, price, title, count, img } ){
        const copyCartItems = [...cartItems];

        const existingItemIndex = copyCartItems.findIndex( item => item.id === id );
        if (  existingItemIndex !== -1 ){
            copyCartItems[existingItemIndex].count += count;
        }else{
            copyCartItems.push({
                id: id,
                title: title,
                img: img,
                count: count,
                price: price,
            });
        }

        setCartItems(copyCartItems);
    }

    function removeItem (id){
        const newCartState = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartState);
    }

    function countItemsInCart (){
        let total = 0;
        cartItems.forEach((item)=>{
            total += item.count;
        });

        return total;
    }

    function clearCart (){
        setCartItems([]);
    }

    function totalCompra(){
        let total = 0;
        cartItems.forEach((item)=>{
            total += item.count*item.price;
        });

        console.log( "Total compra", total );
        return total;
    }

    return <cartContext.Provider 
            value={{
                cartItems,
                countItemsInCart,
                addItem,
                clearCart,
                removeItem,
                totalCompra,
                name: "Carrito de compras" 
            }} 
            >
            {props.children}
           </cartContext.Provider>
}

export default cartContext;