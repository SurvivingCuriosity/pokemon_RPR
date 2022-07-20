import React from "react";

export function PokemonPick(props) {
    
    const {json, jugador, callback, pokemonElegido} = props;


    const handleClick = (evt) => {
        callback(evt);
    }

  return (
    <>
        <div className="imagen-y-flecha">
            <label>
                <input defaultChecked={pokemonElegido.nombre === json.nombre} className='hidden-radio' type="radio" value={json.nombre} name={jugador}/>
                <img  id={json.nombre} src={json.imagen} alt="" onClick={handleClick}></img>
                <span></span>
            </label>
        </div>
    </>
  );



}

