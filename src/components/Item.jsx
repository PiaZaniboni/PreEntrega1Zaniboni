import Button from "./Button";

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
                <Button link="/">Ver detalle</Button>
            </div>
        </div>
    );

}