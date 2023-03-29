import React from "react";
import logo from "../assets/logo.png";
export function FormLogin (props) {
    console.log(props.saludo)

    return (
        <>
            <form className="formularioLogin" onSubmit={props.saludo}>
                <img className="logo" src={logo} />
                <label className="correoLabel">Correo</label>
                {/* <input id="1" placeholder='Correo' type='email' /> */}
                <input className="input-email" id="1" type='email' />
                {/* <p>Correo no válido</p> */}
                <label className="contrasenaLabel">Contraseña</label>
                {/* <input id="2" placeholder='Contraseña' type='password' /> */}
                <input className="input-pass"id="2" type='password' />
                {/* <p>Contraseña incorrecta</p> */}
                <button className="btnLogin" type="submit">Ingresar</button>
            </form>
        </>
    );
}
// <h3> Aquí va el { props.accion } </h3>