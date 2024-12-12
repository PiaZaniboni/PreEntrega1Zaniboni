import CartWidget from "./CartWidget";
import Link from "./Link";
import Logo from "./Logo";

export default function NavBar (props){

    return (
        <nav className="w-full bg-slate-950 text-white py-4 px-12">
            <div className="w-full flex flex-row items-center justify-between">
                <Logo />
                    
                <div className="flex flex-row items-center">
                    <Link link="/dibujos">Dibujos</Link>
                    <Link link="/stickers">Stickers</Link>
                    <Link link="/posters">Posters</Link>
                    <Link link="/cuadernos">Cuadernos</Link>
                    <Link link="/remeras">Remeras</Link>
                    <Link link="/remeras">Parches</Link>
                    <Link link="/accesorios">Accesorios</Link>  
                        
                    <CartWidget />
                </div>
            </div>
        </nav>
    );

}