import { useParams } from "react-router-dom";


export default function CartConfirmation(props){

    const { orderconfirmation } = useParams();
    return (
        <>
            <h2 className="mt-20 mb-20 text-center text-4xl font-bold font-sans">¡Compra confimada! </h2>
            <div className="flex flex-col items-center mx-8">
                <h2 className="text-xl">¡Muchas gracias por tu compra!</h2>
                <h3 className="mt-4 text-lg p-2 bg-[#d7fae5] rounded-[10px]">El código de tu compra es <strong>#{orderconfirmation}</strong></h3>
            </div>
        </>
    );

}