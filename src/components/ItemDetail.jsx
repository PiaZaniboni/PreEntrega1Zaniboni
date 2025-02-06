import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../storage/cartContext";

export default function ItemDetail (props){
    const { title, category, price, img, stock, id } = props;
    const [isAddedToCart, setIsAddedToCart ] = useState (false);

    const { addItem } = useContext(cartContext);


    function onSubmitCount(count){
      console.log("itemDetail", id);
      addItem({id,price,title,count,img});
      setIsAddedToCart(true);
    }


    return (
      <div className="mx-8 mt-20 flex justify-center">
      <img className="mx-4 rounded-[5px]" src={"https://picsum.photos"+img} width="400" height="300" alt={title}/>
      <div className="mt-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-gray-700">{category}</p>
        <div className="flex mt-4 mb-6">
          <p className="font-bold text-lg text-gray-700 mr-8">$ {price}</p>
          {isAddedToCart ? 
          (
            <button>Ver carrito</button>
          )
          :
          (
            <ItemCount onSubmitCount={onSubmitCount} maxStock={stock} />
          )
        }          
        </div>
      </div>
    </div>
    );
}