// import './Login.css' 
import { Meserx } from "../components/waitress/Meserx";
import { BotonPedidos } from "../components/waitress/BotonPedidos";
import { Menu } from "../components/waitress/Menu";
import { Orden } from "../components/waitress/Orden";
import './Waitress.css' 

// export function Login(props) {
//     return (
//         <h1 className="prueba">
//             ESTE ES EL { props.accion }
//         </h1>
//     );
// }

export default function Waitress() {
    return (
        <>
        {/* AQUÍ SE VA A REMPLAZAR EL PROPS DE NOMBRE
        POR EL DE LA PERSONA QUE ESTÉ LOGUEADA ej {nombre} */}
        <Meserx nombre = "Samantha" className="nombre-Waitress" />
        {/* FALTA AGREGAR BIEN LA IMG, NO LA RECONOCE DESDE BTN */}
        <BotonPedidos />
        <Menu />
        <Orden />
        </>
    );    
}

