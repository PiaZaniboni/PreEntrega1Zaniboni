import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail (props){
    
    const { title, category, price, img, stock  } = props;


    return (
      <div className="mx-8 mt-20 flex justify-center">
      <img className="mx-4 rounded-[5px]" src={img} width="400" height="300" alt={title}/>
      <div className="mt-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-gray-700">{category}</p>
        <div className="flex mt-4 mb-6">
          <p className="font-bold text-lg text-gray-700 mr-8">$ {price}</p>
          <ItemCount maxStock={stock} />
        </div>
       
        <button className="rounded-[5px] bg-slate-950 px-4 py-2 text-white">Agregar al carrito</button>
      </div>
    </div>
    );
}