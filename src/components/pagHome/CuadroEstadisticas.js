import React from "react";
import { BarraPorcentaje } from "./BarraPorcentaje";

export function CuadroEstadisticas(props) {
//VARIABLES
    const {pok1,pok2} = props;
  return (
        <div className="cuadro-estadisticas">
            {pok1 ? 
            <div className="stat">
                <h2 className={`texto-color-${pok1.color}`}>{pok1.nombre}</h2>
                <div className="linea-flex-hijosIguales">
                    <p>HP: </p>
                    <BarraPorcentaje porcentaje={pok1.propiedades.vida} color={pok1.color}/>
                    <p>{pok1.propiedades.vida}</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>VEL: </p>
                    <BarraPorcentaje porcentaje={pok1.propiedades.velocidad} color={pok1.color}/>
                    <p>{pok1.propiedades.velocidad}</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>ATK:</p>
                    <BarraPorcentaje porcentaje={pok1.propiedades.ataque} color={pok1.color}/>
                    <p>{pok1.propiedades.ataque}</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>DEF:</p>
                    <BarraPorcentaje porcentaje={pok1.propiedades.defensa} color={pok1.color}/>
                    <p>{pok1.propiedades.defensa}</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>AIM:</p>
                    <BarraPorcentaje porcentaje={pok1.propiedades.precision} color={pok1.color}/>
                    <p>{pok1.propiedades.precision}</p>
                </div>
            </div>
            :
            <div className="stat">
                <h2 className={`texto-color`}>Jugador 1</h2>
                <div className="linea-flex-hijosIguales">
                    <p>HP: </p>
                    <p>xxx</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>VEL: </p>
                    <p>xxx</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>ATK:</p>
                    <p>xxx</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>DEF:</p>
                    <p>xxx</p>
                </div>
            </div>
            }
            {pok2 ? 
            <div className="stat">
            <h2 className={`texto-color-${pok2.color}`}>{pok2.nombre}</h2>
            <div className="linea-flex-hijosIguales">
                <p>HP: </p>
                <BarraPorcentaje porcentaje={pok2.propiedades.vida} color={pok2.color}/>
                <p>{pok2.propiedades.vida}</p>
            </div>
            <div className="linea-flex-hijosIguales">
                <p>VEL: </p>
                <BarraPorcentaje porcentaje={pok2.propiedades.velocidad} color={pok2.color}/>
                <p>{pok2.propiedades.velocidad}</p>
            </div>
            <div className="linea-flex-hijosIguales">
                <p>ATK:</p>
                <BarraPorcentaje porcentaje={pok2.propiedades.ataque} color={pok2.color}/>
                <p>{pok2.propiedades.ataque}</p>
            </div>
            <div className="linea-flex-hijosIguales">
                <p>DEF:</p>
                <BarraPorcentaje porcentaje={pok2.propiedades.defensa} color={pok2.color}/>
                <p>{pok2.propiedades.defensa}</p>
            </div>
            <div className="linea-flex-hijosIguales">
                    <p>AIM:</p>
                    <BarraPorcentaje porcentaje={pok2.propiedades.precision} color={pok2.color}/>
                    <p>{pok2.propiedades.precision}</p>
                </div>
            </div>
            :
            <div className="stat">
                <h2 className={`texto-color`}>Jugador 2</h2>
                <div className="linea-flex-hijosIguales">
                    <p>HP: </p>
                    <p>xxx</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>VEL: </p>
                    <p>xxx</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>ATK:</p>
                    <p>xxx</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>DEF:</p>
                    <p>xxx</p>
                </div>
            </div>
            }
            

        </div>
  );



}

