import { FaWindowClose } from "react-icons/fa";

export default function CartItem (props) {

    const { id, price, title, count, img, handleRemoveItem } = props;

    return(
        <tr key={id} className="odd:bg-white even:bg-gray-50">
            <td className="px-4 py-2 border">
              <img src={"https://picsum.photos"+img} alt={title} className="w-24 h-24 object-cover mx-auto" />
            </td>
            <td className="px-4 py-2 border">{title}</td>
            <td className="px-4 py-2 border text-center">${price.toFixed(2)}</td>
            <td className="px-4 py-2 border text-center">{count}</td>
            <td className="px-4 py-2 border text-center">${(price*count).toFixed(2)}</td>
            <td className="px-4 py-2 border text-center">
              <button onClick={()=>{ handleRemoveItem(id) } } className="text-red-500 text-xl px-2 py-1 rounded"><FaWindowClose /></button>
            </td>
        </tr>
    );

}