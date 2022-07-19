import React from "react";
import {pokemons} from '../../static-data/pokemons.js'

import { PokemonPick } from "./PokemonPick.js";

export function PokemonPicker(props) {
    const {jugador, callbackHome, pokemonElegido} = props;
    
  return (
        <ul id="pokemon-picker-container">
            {pokemons.map((pokemon)=>{
                return(
                    <PokemonPick 
                        key={pokemon.nombre}
                        jugador={jugador}
                        json={pokemon}
                        callback={callbackHome}
                        pokemonElegido={pokemonElegido}
                    />
                )
            })}
            
        </ul>
  );



}

