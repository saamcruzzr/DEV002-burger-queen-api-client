
export default function froms (props) {
    return (
        <>
            <h3> Aquí nos vamos a { props.accion } </h3>
            <input id="1" placeholder='Email'/>
            <input id="2" placeholder='Password'/>
            <button onClick={()=> {
                console.log(document.getElementById('1').value)
                console.log(document.getElementById('2').value)
                }
            }/>
            
        </>
    );
}