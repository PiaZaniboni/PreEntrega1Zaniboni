import CartWidget from "./CartWidget";
import Link from "./Link";

const styleFlex = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "15px"
}

//Libreria de estilos


export default function NavBar (props){

    return (
        <nav style={styleFlex}>
            <a href="/" title="CreativeLAb" alt="CreativeLAb">CreativeLab</a>
                  
            <Link link="/dibujos">Dibujos</Link>
            <Link link="/stickers">Stickers</Link>
            <Link link="/remeras">Remeras</Link>
                
            <CartWidget />
        </nav>
    );

}