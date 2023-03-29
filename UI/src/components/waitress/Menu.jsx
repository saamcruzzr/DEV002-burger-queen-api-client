import { Bebidas } from "./Bebidas";
import { Dulces } from "./Dulces";
import { Saladas } from "./Saladas";

export function Menu() {
    return (
        <>
        {/* <nav className="barra-nav">
            <Link to="/Dulces">DULCES   ----</Link> 
            <Link to="/Saladas">SALADAS   ----</Link>
            <Link to="/Bebidas">BEBIDAS   ----</Link>
        </nav> */}
        <Dulces />
        {/* <Saladas />
        <Bebidas /> */}
        </>
    );
}