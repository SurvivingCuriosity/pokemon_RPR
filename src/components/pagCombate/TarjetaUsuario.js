import React from "react";

export function TarjetaUsuario(props) {
//PROPIEDADES
    const {objetos, pokemonActivo, infoCombate, callbackAtack, callbackObjeto, narradorTrabajando} = props;


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
    const tarjetaAtaques = (
        <>
            <p className="boton-volver-tarjeta" onClick={handleClickVolver}>Volver</p>
            <div className="tarjeta-ataques">
                <p onClick={handleUsarAtaque}className="oculta-primer-caracter">0{pokemonActivo.ataques[0].nombre}</p>
                <p onClick={handleUsarAtaque}className="oculta-primer-caracter">1{pokemonActivo.ataques[1].nombre}</p>
                <p onClick={handleUsarAtaque}className="oculta-primer-caracter">2{pokemonActivo.ataques[2].nombre}</p>
                <p onClick={handleUsarAtaque}className="oculta-primer-caracter">3{pokemonActivo.ataques[3].nombre}</p>
            </div>
        </>
    )

    const tarjetaObjetos = (
        <>
            <p className="boton-volver-tarjeta" onClick={handleClickVolver}>Volver</p>
            <div className="tarjeta-objetos-combate">
                <div onClick={handleUsarObjeto}>
                    <p>{objetos[0].nombreDisplay} ({objetos[0].usos})</p>
                    <img  alt="Icono objeto 0" src={objetos[0].imagen} />
                </div>
                <div onClick={handleUsarObjeto}>
                    <p>{objetos[1].nombreDisplay} ({objetos[1].usos})</p>
                    <img  alt="Icono objeto 1" src={objetos[1].imagen} />
                </div>
                <div onClick={handleUsarObjeto}>
                    <p>{objetos[2].nombreDisplay} ({objetos[2].usos})</p>
                    <img  alt="Icono objeto 2" src={objetos[2].imagen} />
                </div>
                <div onClick={handleUsarObjeto}>
                    <p>{objetos[3].nombreDisplay} ({objetos[3].usos})</p>
                    <img  alt="Icono objeto 3" src={objetos[3].imagen} />
                </div>
            </div>
        </>
        
    )

    const tarjetaAtacarObjetos = (
        <div className="tarjeta-ataque-objeto">
            <div className="fondo-rojo" onClick={handleClickAtacar}>Atacar</div>
            <div  onClick={handleClickObjetos}>Usar objeto</div>
        </div>
    )
//ESTADO    
    const [contenidoActivo, setContenidoActivo] = React.useState(tarjetaAtacarObjetos);
    

  return (
    <div className={`tarjeta-usuario borde-${pokemonActivo.color} fade-in`}>
        <p>{`Turno del jugador ${infoCombate.turno}`}</p>
        {narradorTrabajando===false ? contenidoActivo : ''}
    </div>
  );

}

