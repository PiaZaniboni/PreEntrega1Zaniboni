import { Link } from "react-router-dom";

export default function Item (props){

    const { id, title, price, category, img } = props;

    return (
        <div className="mb-6 mx-2">
            <img className="rounded-[5px]" src={"https://picsum.photos"+img} alt={title} width="240" height="180" />
            <div className="mt-2">
                <h3 className="font-bold text-gray-800 text-base">{title}</h3>
                <p className="text-gray-700 text-sm">{category}</p>
                <p className="font-bold text-black-700">${price}</p>
                <Link to={`/item/${id}`}>
                    <span className="underline uppercase text-sm mt-2 block">Ver detalle</span>
                </Link>
            </div>
        </div>
    );

}