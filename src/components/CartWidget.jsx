import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import cartContext from "../storage/cartContext.jsx";

export default function CartWidget (props) {
    const context = useContext(cartContext);

    console.log( "CONTEXT----->", context);

    const stylesSpan = 'bg-red-600 rounded-full mt-[-10px] px-[6px] py-[1px] text-xs font-bold';

    return (
        <> 
            <div className="flex items-center border-l-[1px] border-solid pl-4"> <FaShoppingCart /> <span className={stylesSpan} >{context.countItemsInCart()}</span> </div>
        </>
    );
}