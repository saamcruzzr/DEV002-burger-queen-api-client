import "./Orden.css"

export function Orden() {
    return (
        <section className="ordenes">
            {/* <label>Cliente</label> */}
            <input className="input-cliente" id="1" placeholder='CLIENTE' type='text' />
            {/* <input className="input-email" id="1" type='email' /> */}
            {/* <p>Correo no válido</p> */}
            {/* <label>Mesa</label> */}
            <input className="input-mesa"id="2" placeholder='MESA' type='Number' />
            {/* <input className="input-pass"id="2" type='password' /> */}   
           
            {/* AQUI AGREGAR ORDENES */}
            
            <button className="enviarCocina">enviar a cocina</button>
        </section>
    );
}