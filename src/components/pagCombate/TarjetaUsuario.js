import React from "react";
import { objetos } from "../../pokemon-data/objetos";

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
                <div onClick={handleUsarAtaque}><p className="oculta-primer-caracter">0{ataques[0].nombre}</p></div>
                <div onClick={handleUsarAtaque}><p className="oculta-primer-caracter">1{ataques[1].nombre}</p></div>
                <div onClick={handleUsarAtaque}><p className="oculta-primer-caracter">2{ataques[2].nombre}</p></div>
                <div onClick={handleUsarAtaque}><p className="oculta-primer-caracter">3{ataques[3].nombre}</p></div>
            </div>
        </>
    )
    const tarjetaObjetos = (
        <>
            <p className="boton-volver-tarjeta" onClick={handleClickVolver}>Volver</p>
            <div className="tarjeta-ataques">
                <div onClick={handleUsarObjeto}>
                    <p>{objetos[0].nombre}</p>
                    <img src={objetos[0].img} />
                </div>
                <div onClick={handleUsarObjeto}>
                    <p>{objetos[1].nombre}</p>
                    <img src={objetos[1].img} />
                </div>
                <div onClick={handleUsarObjeto}>
                    <p>{objetos[2].nombre}</p>
                    <img src={objetos[2].img} />
                </div>
                <div onClick={handleUsarObjeto}>
                    <p>{objetos[3].nombre}</p>
                    <img src={objetos[3].img} />
                </div>
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
    let [contenidoActivo, setContenidoActivo] = React.useState(tarjetaAtacarObjetos);
    
    React.useEffect(()=>{
    },[])


  return (
    <div className={`tarjeta-usuario color-borde-${colorBorde} fade-in`}>
        <p>{`Turno del jugador ${infoCombate.turno}`}</p>
        {narradorTrabajando===false ? contenidoActivo : ''}
    </div>
  );

}

