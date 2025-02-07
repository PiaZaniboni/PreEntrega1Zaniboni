import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function NavBar (props){

    const styleLink = "px-5 font-sans";

    return (
        <nav className="w-full bg-slate-950 text-white py-4 px-12">
            <div className="w-full flex flex-row items-center justify-between">
                <Logo />
                    
                <div className="flex flex-row items-center">
                    <NavLink className={styleLink} to="/category/dibujos">Dibujos</NavLink>
                    <NavLink className={styleLink} to="/category/stickers">Stickers</NavLink>
                    <NavLink className={styleLink} to="/category/posters">Posters</NavLink>
                    <NavLink className={styleLink} to="/category/cuadernos">Cuadernos</NavLink>
                    <NavLink className={styleLink} to="/category/remeras">Remeras</NavLink>
                    <NavLink className={styleLink} to="/category/remeras">Remeras</NavLink>
                    
                    
                    <NavLink to="/cart">
                        <CartWidget />
                    </NavLink>
                </div>
            </div>
        </nav>
    );

}