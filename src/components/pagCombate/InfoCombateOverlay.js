import React from "react";
import {CuadroEstadisticas} from '../pagHome/CuadroEstadisticas.js'
export function InfoCombateOverlay(props) {
    const {callback, infoCombate} = props;

  return (
    <>
        <div className="infoCombate-overlay fade-in">
            <button onClick={callback} className="btn-cerrar">x</button>
            <h2>Información</h2>
            <h3>Pokemon</h3>
            <CuadroEstadisticas 
                pok1 = {infoCombate.jugador1}
                pok2 = {infoCombate.jugador2}
            />
            <h3>Objetos</h3>
            <CuadroEstadisticas 
                pok1 = {infoCombate.jugador1}
                pok2 = {infoCombate.jugador2}
            />
        </div>
    </>
  );



}

