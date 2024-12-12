import CartWidget from "./CartWidget";
import Link from "./Link";
import Logo from "./Logo";

export default function NavBar (props){

    return (
        <nav className="flex flex-row">
            <Logo />
                  
            <Link link="/dibujos">Dibujos</Link>
            <Link link="/stickers">Stickers</Link>
            <Link link="/remeras">Remeras</Link>
                
            <CartWidget />
        </nav>
    );

}