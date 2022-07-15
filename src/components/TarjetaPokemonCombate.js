import React from "react";


export function TarjetaPokemonCombate(props) {
    const {infoPokemon, jugador, _turno, vida} = props;

  return (
    <div className="tarjeta-combate">
      <div className={vida<=0 ? 'muere' : ''}>
        <img className={_turno==jugador ? 'salta' : ''} src={infoPokemon.imagen}></img>
      </div>
        <div className="--tarjeta-combate-top">
            <p>{`J${jugador}: ${infoPokemon.nombre}`}</p>
            <p>{`${vida}`}</p>
        </div>
        <div className="barra-vida">
            <div className="--barra-vida-vida" style={{width: `${vida}%`}}></div>
        </div>
    </div>
  );

}

