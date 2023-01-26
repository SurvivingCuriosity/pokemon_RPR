import React from "react";
import { BarraPorcentaje } from "./BarraPorcentaje";

export function CuadroEstadisticas(props) {
    //VARIABLES
    const { pokemon } = props;

    return (
        <div className="cuadro-estadisticas">
            <div className="stat">
                <h2 className={`texto-color-${pokemon?.color}`}>{pokemon?.nombre}</h2>
                <div className="linea-flex-hijosIguales">
                    <p>HP: </p>
                    <BarraPorcentaje porcentaje={pokemon?.propiedades?.vida} color={pokemon?.color} />
                    <p>{pokemon?.propiedades?.vida}</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>VEL: </p>
                    <BarraPorcentaje porcentaje={pokemon?.propiedades?.velocidad} color={pokemon?.color} />
                    <p>{pokemon?.propiedades?.velocidad}</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>ATK:</p>
                    <BarraPorcentaje porcentaje={pokemon?.propiedades?.ataque} color={pokemon?.color} />
                    <p>{pokemon?.propiedades?.ataque}</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>DEF:</p>
                    <BarraPorcentaje porcentaje={pokemon?.propiedades?.defensa} color={pokemon?.color} />
                    <p>{pokemon?.propiedades?.defensa}</p>
                </div>
                <div className="linea-flex-hijosIguales">
                    <p>AIM:</p>
                    <BarraPorcentaje porcentaje={pokemon?.propiedades?.precision} color={pokemon?.color} />
                    <p>{pokemon?.propiedades?.precision}</p>
                </div>
            </div>
        </div>
    );



}

