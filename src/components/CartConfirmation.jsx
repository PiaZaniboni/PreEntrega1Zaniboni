import { useParams } from "react-router-dom";


export default function CartConfirmation(props){

    const { orderconfirmation } = useParams();
    console.log(orderconfirmation);
    return (
        <>
            <h2 className="mt-20 mb-12 text-center text-4xl font-bold font-sans">Compra confimada! </h2>
            <div className="flex flex-wrap justify-center mx-8">
                <div>Gracias por tu compra {orderconfirmation}</div>
            </div>
        </>
    );

}