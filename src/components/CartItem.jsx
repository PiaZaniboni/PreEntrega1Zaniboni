


export default function CartItem (props) {

    const { id, price, title, count, img, handleRemoveItem } = props;

    return(
        <div className="mb-6 mx-2">
            <img className="rounded-[5px]" src={"https://picsum.photos"+img} alt={title} />
                <div className="mt-2">
                    <h3 className="font-bold text-gray-800 text-base">{title}</h3>
                        <p className="font-bold text-black-700">${price}</p>
                        <p className="font-bold text-black-700">{count}</p>
                        <p className="font-bold text-black-700">${id}</p>


                        <p>Subtotal= ${price*count}</p>
                </div>
            <button onClick={()=>{ handleRemoveItem(id) } }>Eliminar</button>
        </div>
    );

}