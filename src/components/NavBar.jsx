import CartWidget from "./CartWidget";
import Button from "./Button";
import Logo from "./Logo";

export default function NavBar (props){

    return (
        <nav className="w-full bg-slate-950 text-white py-4 px-12">
            <div className="w-full flex flex-row items-center justify-between">
                <Logo />
                    
                <div className="flex flex-row items-center">
                    <Button link="/category/dibujos">Dibujos</Button>
                    <Button link="/category/stickers">Stickers</Button>
                    <Button link="/category/posters">Posters</Button>
                    <Button link="/category/cuadernos">Cuadernos</Button>
                    <Button link="/category/remeras">Remeras</Button>
                
                    <CartWidget />
                </div>
            </div>
        </nav>
    );

}