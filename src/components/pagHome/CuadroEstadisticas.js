import React from "react";

export function CuadroEstadisticas(props) {
//VARIABLES
    const {nombreJ1, nombreJ2, pok1,pok2} = props;
    console.log(pok1);
  return (
        <div className="cuadro-estadisticas">
            {pok1 && 
            <>
                <div>
                    <div className="stat stats-1">
                        
                    <h2 className={`texto-color-${pok1.color}`}>{pok1.nombre}</h2>
                    <div className="linea-flex-empujarLados">
                        <span>Vida: </span>
                        <span>{pok1.propiedades.vida}</span>
                    </div>
                    <div className="linea-flex-empujarLados">
                        <span>Velocidad: </span>
                        <span>{pok1.propiedades.velocidad}</span>
                    </div>
                    <div className="linea-flex-empujarLados">
                        <span>Ataque: </span>
                        <span>{pok1.propiedades.ataque}</span>
                    </div>
                    <div className="linea-flex-empujarLados">
                        <span>Defensa: </span>
                        <span>{pok1.propiedades.defensa}</span>
                    </div>

                    </div>
                </div>
                    
            </>
            
            }
            {pok2 && 
                <div>
                    <div className="stat stats-2">
                        
                    <h2 className={`texto-color-${pok2.color}`}>{pok2.nombre}</h2>
                    <div className="linea-flex-empujarLados">
                        <p>Vida</p>
                        <p>{pok2.propiedades.vida}</p>
                    </div>
                    <div className="linea-flex-empujarLados">
                        <p>Velocidad</p>
                        <p>{pok2.propiedades.velocidad}</p>
                    </div>
                    <div className="linea-flex-empujarLados">
                        <p>Ataque</p>
                        <p>{pok2.propiedades.ataque}</p>
                    </div>
                    <div className="linea-flex-empujarLados">
                        <p>Defensa</p>
                        <p>{pok2.propiedades.defensa}</p>
                    </div>

                    </div>
                </div>
            }
            

        </div>
  );



}

