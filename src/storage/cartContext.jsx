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

    function getTotalPrice(){
        let totalPrice = 0;
        cartItems.forEach((item)=>{
            totalPrice += item.count*item.price;
        });

        return totalPrice;
    }

    return <cartContext.Provider 
            value={{
                cartItems,
                countItemsInCart,
                addItem,
                clearCart,
                removeItem,
                getTotalPrice,
                name: "Carrito de compras" 
            }} 
            >
            {props.children}
           </cartContext.Provider>
}

export default cartContext;