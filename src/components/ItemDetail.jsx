import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail (props){
    
    const { title, category, price, img, stock  } = props;

    //TO Do sumar ItemCount, if con stock

    return (
        <div className="">
      <img src={img} width="240" height="180" alt={title}/>
      <div className="">
        <h3 className="">{title}</h3>
        <p className="">{category}</p>
        <div>
          <p className="">$ {price}</p>
        </div>
        <ItemCount maxStock={stock} />
        <button>Agregar al carrito</button>
      </div>
    </div>
    );
}