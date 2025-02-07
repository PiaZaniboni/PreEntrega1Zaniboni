import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../storage/cartContext";
import { NavLink } from "react-router-dom";

export default function ItemDetail (props){
    const { title, category, price, img, stock, id } = props;
    const [isAddedToCart, setIsAddedToCart ] = useState (false);

    const { addItem } = useContext(cartContext);

    function onSubmitCount(count){
      addItem({id,price,title,count,img});
      setIsAddedToCart(true);
    }

    return (
      <div className="mx-8 mt-20 flex justify-center">
      <img className="mx-4 rounded-[5px]" src={"https://picsum.photos"+img} width="400" height="300" alt={title}/>
      <div className="mt-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-gray-700">{category}</p>
        <p className="font-bold text-lg text-gray-700 mt-4 mr-8">$ {price}</p>
          {
            stock > 0 ?
              isAddedToCart ? 
              (
                <div className="mt-2 mb-6">
                  <h5 className="block mb-4 font-bold color-[#186400]">Producto agregado al carrito!</h5>
                  <NavLink to="/cart" className="font-bold bg-[#b8ebc8] text-center px-4 py-2 text-[#003f13] rounded-[10px]">Finalizar compra</NavLink>
                </div>
              )
              :
              (
                <div className="flex mt-2 mb-6">
                  <ItemCount onSubmitCount={onSubmitCount} maxStock={stock} />
                </div>
              )
            :
            <h5 className="block mt-2 mb-4 font-bold text-[#a80000]">Este producto no tiene stock</h5>
        }          

      </div>
    </div>
    );
}