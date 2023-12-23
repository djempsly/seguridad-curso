import React from "react";
import { Loading } from "./Loading";
const CLAVE = prompt('escribe tu código')

function UseStateDeclarativo({name}){
    const [state, setState] = React.useState({
        value: '',
        loading: false,
        error:false,
        deleted:false,
        confirmed: false

    })

    React.useEffect(()=>{
        if (!!state.loading) {
            setTimeout(() => {
                
                    if (state.value === CLAVE) {
                        setState({ ...state, error:false, loading:false})
                        return(
                            <p>Correcto</p>
                        )
                        
                    } else {
                        setState({ ...state, error:true, loading:false})
    
                    }
                
                
            }, 3000);
            
        }
    }, [state.loading])

    const onChange = (event)=>{
        setState(event)
    }

    const onCheck = ()=>{
        setState({
            ...state,
            loading:true,
            value: ''
            
        })
    }

    console.log(state.value);

    return(
        <>
        <h2>Elimina {name} </h2>
        <p>Por favor, escribe tu código de seguridad</p>
        {(state.error && !state.loading) && <p>Error: el código es incorrecto</p>}
        {state.loading && <Loading /> }

        <input placeholder="escribe tu código"

        value={state.value}
        onChange = { (event)=>
            onChange({value:event.target.value})
        }
    
        />

        <button
        onClick={onCheck}
        >
        Comprobar</button>
        </>
    )
}

export { UseStateDeclarativo}