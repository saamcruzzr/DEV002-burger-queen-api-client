import React from "react";
import logo from "../assets/logo.png";
export function FormLogin (props) {
    console.log(props.saludo)

    return (
        <>
            <form className="formularioLogin" onSubmit={props.saludo}>
                <img className="logo" src={logo} />
                <input id="1" placeholder='Email' type='email' />
                <input id="2" placeholder='Password' type='password' />
                <button type="submit">Ingresar</button>
            </form>
        </>
    );
}
// <h3> Aquí va el { props.accion } </h3>