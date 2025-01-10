import { NavLink } from "react-router-dom";

export default function Logo (props){
    return (
        <NavLink to="/" >
            <h1 className="text-2xl font-medium font-sans" >CreativeLab</h1>
        </NavLink>
    );


}