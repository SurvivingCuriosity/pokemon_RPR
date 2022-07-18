import React from "react";

export function PokemonPick(props) {
    
    const {json, jugador, callback} = props;


    const handleClick = (evt) => {
        callback(evt);
    }

  return (
    <>
        <div className="imagen-y-flecha">
            <label>
                <input type="radio" value={json.nombre} name={jugador}/>
                <img  id={json.nombre} src={json.imagen} alt="" onClick={handleClick}></img>
                <span></span>
                
            </label>
        </div>
    </>
  );



}

