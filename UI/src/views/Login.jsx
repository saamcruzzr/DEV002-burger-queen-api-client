import { useState } from 'react'
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
   //AQUÍ AGREGAR LA REDIRECCIÓN A WAITRESS / KITCHEN / ADMIN
}

export default function Login(props) {
    const [inputEmailValue, setInputEmailValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('inputEmailValue', inputEmailValue)
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: inputEmailValue,
                password: "123456",
            }),
        })
            .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
            .catch((error) => console.error(error)); 
        }

    return (
        <>
        < FormLogin onSubmit={handleSubmit} inputEmailValue={inputEmailValue} setInputEmailValue={setInputEmailValue} className="FL" />
        <span>{inputEmailValue}</span>
        </>
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

// AQUI AGREGAR EL FETCH API
// const fetchAPI = () => {
//    fetch("http://localhost:8080/login", {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: 'anita.borg@systers.xyz',
//         password: "123456",
//      }),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => console.error(error)); 
// }
