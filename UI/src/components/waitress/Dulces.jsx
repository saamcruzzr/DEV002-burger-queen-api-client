import { CardMenu } from "../CardMenu";
import { CardCantidad } from "../CardCantidad";


export function Dulces() {
    return (
        <>
        <p className="menuNombreApartados">Dulces</p>
        <CardCantidad />
        <CardMenu />
        {/* <CardMenu />
        <CardMenu /> */}
        </>
    );
}