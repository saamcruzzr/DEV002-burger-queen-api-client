import React from "react";

export function FormLogin (props) {
    console.log(props.saludo)

    return (
        <>
            <form onSubmit={props.saludo}>
                <h3> Aquí nos vamos a { props.accion } </h3>
                <input id="1" placeholder='Email'/>
                <input id="2" placeholder='Password'/>
                <button type="submit" />
            </form>
        </>
    );
}