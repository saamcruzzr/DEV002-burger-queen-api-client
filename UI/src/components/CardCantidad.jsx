
export function CardCantidad() {
    return (
        <div className="card">
            <h2 className="nombreProducto">Tres Moras Especial</h2>
            <p className="cantidadCard">cantidad:</p>
            <p className="cantNumero">88</p>
            <p className="notasCard">Notas:</p>
            {/* <input type="text" placeholder="Sin chantilly y frambuesa extra frambuesa Sin chantilly  y fram buesa extra Sin chantilly. " /> */}
            <textarea className="txtNotas" cols="20" rows="4" placeholder="Sin chantilly y frambuesa extra frambuesa Sin chantilly  y fram buesa extra Sin chantilly."></textarea>
            <img src="paloma"></img>
            <img src="tache"></img>
            
        </div>
    );
}