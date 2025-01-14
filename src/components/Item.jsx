import { Link } from "react-router-dom";

export default function Item (props){

    const { id, title, price, category, img } = props;

    return (
        <div>
            <img src={img} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{category}</p>
                <div>
                    <p>${price}</p>
                </div>
                <Link to={`/item/${id}`}>
                    Ver detalle
                </Link>
            </div>
        </div>
    );

}