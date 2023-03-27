import { FormLogin } from '../components/FormLogin.jsx'
import './Login.css' 

// export default function Login(props) {
//     return (
//         <h1 className="prueba">
//             ESTE ES EL { props.title }
//         </h1>
//     );
// }
const saludar = (event)=> {
    event.preventDefault()
   console.log(event.target)
}
export default function Login(props) {
    return (
        < FormLogin saludo = {saludar} />
        // <>
        //     <h3> Aquí nos vamos a { props.accion } </h3>
        //     <input id="1" placeholder='Email'/>
        //     <input id="2" placeholder='Password'/>
        //     <button onClick={()=> {
        //         console.log(document.getElementById('1').value)
        //         console.log(document.getElementById('2').value)
        //         }
        //     }/>
        // </>
    );
}
