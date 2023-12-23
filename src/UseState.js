import React from "react";

function UseState({name}){
    return(
        <>
        <h2>elimina {name} </h2>
        <p>Por favor, escribe tu código de seguridad</p>

        <input placeholder="escribe tu código"
    
        />

        <button>Comprobar</button>
        </>
    )
}

export { UseState}