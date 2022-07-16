import React from "react";


export function TarjetaPokemonCombate(props) {
    const {infoPokemon, jugador, turno} = props;
    let [vidaInicial, setVidaInicial] = React.useState(infoPokemon.propiedades.vida);

    let vidaActual = infoPokemon.propiedades.vida;
    vidaActual < 0 ? vidaActual=0 : vidaActual=vidaActual
  return (
    <div className="tarjeta-combate">
      <div className={infoPokemon.propiedades.vida <=0 ? 'muere' : ''}>
        <img className={turno==jugador ? 'salta' : ''} src={infoPokemon.imagen}></img>
      </div>
        <div className="--tarjeta-combate-top">
            <p>{`J${jugador}: ${infoPokemon.nombre}`}</p>
            <p>{`${vidaActual}/${vidaInicial}`}</p>
        </div>
        <div className="barra-vida">
            <div className="--barra-vida-vida" style={{width: `${infoPokemon.propiedades.vida}%`}}></div>
        </div>
    </div>
  );

}

