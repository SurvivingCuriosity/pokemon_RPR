import React from "react";


export function TarjetaUsuario(props) {
//PROPIEDADES
    const {ataques, colorBorde='amarillo', infoCombate, callbackAtack, callbackObjeto, narradorTrabajando} = props;

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

//HANDLE ACCIONES FINALES   
    const handleUsarAtaque = (evt) =>{
        callbackAtack(evt, infoCombate.turno);
    }
    const handleUsarObjeto = (evt) =>{
        callbackObjeto(evt, infoCombate.turno);
    }
//ESCENARIOS
    let tarjetaAtaques = (
        <>
            <p className="boton-volver-tarjeta" onClick={handleClickVolver}>Volver</p>
            <div className="tarjeta-ataques">
                <div onClick={handleUsarAtaque}><p>0{ataques[0].nombre}</p></div>
                <div onClick={handleUsarAtaque}><p>1{ataques[1].nombre}</p></div>
                <div onClick={handleUsarAtaque}><p>2{ataques[2].nombre}</p></div>
                <div onClick={handleUsarAtaque}><p>3{ataques[3].nombre}</p></div>
            </div>
        </>
    )
    const tarjetaObjetos = (
        <>
            <p className="boton-volver-tarjeta" onClick={handleClickVolver}>Volver</p>
            <div className="tarjeta-ataques">
                <div onClick={handleUsarObjeto}>Porro</div>
                <div onClick={handleUsarObjeto}>Pocion</div>
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
        window.setTimeout(()=>{
            setContenidoActivo(tarjetaAtacarObjetos)
        },2000)
    },[])


  return (
    <div className={`tarjeta-usuario color-borde-${colorBorde}`}>
        <p>{`Turno del jugador ${infoCombate.turno}`}</p>
        {!narradorTrabajando && contenidoActivo}
    </div>
  );

}

