import React from "react";
import { useSelector } from "react-redux";
import {CuadroEstadisticas} from '../pagHome/CuadroEstadisticas.js'
export function InfoCombateOverlay(props) {
    const {pokemon1, pokemon2} = useSelector(state=>state);
    const {callback} = props;
  return (
    <>
        <div className="infoCombate-overlay fade-in">
            <button onClick={callback} className="btn-cerrar">x</button>
            <div>
                <CuadroEstadisticas 
                    pokemon = {pokemon1}
                />
                <CuadroEstadisticas 
                    pokemon = {pokemon2}
                />
            </div>
        </div>
    </>
  );



}

