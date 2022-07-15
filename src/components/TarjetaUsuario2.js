import React from "react";


export function TarjetaUsuario2(props) {
//PROPIEDADES
    const {ataques, _turno, infoCombate, callbackAtack} = props;
    console.log(infoCombate);
    //console.log('EL turno en tarjeta uuario '+_turno);
    const textoInicial = (<span className="--tarjeta-usuario-texto">¿Qué quieres hacer?</span>)
//MANEJADORES DE EVENTOS
    const handleClickVolver = () =>{
        setContenidoActivo(tarjetaAtacarObjetos)
    }
    const handleClickAtacar = () =>{
        setContenidoActivo(tarjetaAtaques);
    }
    const handleClickObjetos = () =>{
        setContenidoActivo(tarjetaObjetos);
    }
    const handleUsarAtaque = (evt) =>{
        callbackAtack(evt, _turno);
    }
//ESCENARIOS
    let tarjetaAtaques = (
        <>
            <p className="tarjeta-ataques boton-volver-tarjeta" onClick={handleClickVolver}>Volver</p>
            <div className="tarjeta-ataques">
                <div onClick={handleUsarAtaque}>0.-{ataques[0].nombre}</div>
                <div onClick={handleUsarAtaque}>1.-{ataques[1].nombre}</div>
                <div onClick={handleUsarAtaque}>2.-{ataques[2].nombre}</div>
                <div onClick={handleUsarAtaque}>3.-{ataques[3].nombre}</div>
            </div>
        </>
        
    )
    const tarjetaObjetos = (
        <>
            <p className="tarjeta-ataques boton-volver-tarjeta" onClick={handleClickVolver}>Volver</p>
            <div className="tarjeta-ataques">
                <div>Porro</div>
                <div>Pocion</div>
            </div>
        </>
        
    )
    
    const tarjetaAtacarObjetos = (
        <div className="tarjeta-ataque-objeto">
            <div className=" fondo-rojo" onClick={handleClickAtacar}>Atacar</div>
            <div className=" fondo-azul" onClick={handleClickObjetos}>Usar objeto</div>
        </div>
    )
//ESTADO    
    let [contenidoActivo, setContenidoActivo] = React.useState(textoInicial);
    
    React.useEffect(()=>{


            setContenidoActivo(tarjetaAtacarObjetos)

        
    },[])


  return (
    <div className="tarjeta-usuario">
        <p>{`Turno del jugador ${_turno}`}</p>
        {contenidoActivo}
    </div>
  );

}

