import React from "react";
import {pokemons} from '../../../static-data/pokemons.js'

import { PokemonPick } from "./../pokemonPicker/PokemonPick";

export function PokemonPicker(props) {
    const {jugador, callbackHome, pokemonElegido} = props;
  return (
    <div className="home-step-box">
        <h3 className={`texto-color-${pokemonElegido.color ? pokemonElegido.color : ''}`}>{`Elige un pokemon`}</h3>
        <ul id="pokemon-picker-container">
            {pokemons.map((pokemon)=>{
                return(
                    <PokemonPick 
                        key={pokemon.nombre}
                        jugador={jugador}
                        json={pokemon}
                        pokemonElegido={pokemonElegido}
                        callback={callbackHome}
                
                    />
                )
            })}
            
        </ul>
    </div>
  );



}

