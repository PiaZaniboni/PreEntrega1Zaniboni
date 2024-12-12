import CartWidget from "./CartWidget";
import Link from "./Link";
import Logo from "./Logo";

export default function NavBar (props){

    return (
        <nav className="w-full bg-slate-950 text-white p-4 flex flex-row">
            <div className="w-full mx-5 flex flex-row">
                <Logo />
                    
                <Link link="/dibujos">Dibujos</Link>
                <Link link="/stickers">Stickers</Link>
                <Link link="/remeras">Remeras</Link>
                    
                <CartWidget />
            </div>
        </nav>
    );

}