import React from "react";
import { useDispatch } from "react-redux";
import { pokemons } from '../../../static-data/pokemons.js'
import { CuadroEstadisticas } from '../CuadroEstadisticas'
import { PokemonPick } from "./../pokemonPicker/PokemonPick";
import { setPokemon } from "../../../redux/Actions.js";
export function PokemonPicker(props) {
    const dispatch = useDispatch();
    const { jugador, pokemonElegido, callback } = props;
    return (
        <div className="home-step-box">
            <h3 className={`texto-color-${pokemonElegido.color ? pokemonElegido.color : ''}`}>{`Elige un pokemon`}</h3>
            <ul id="pokemon-picker-container">
                {pokemons.map((pokemon) => {
                    return (
                        <PokemonPick
                            key={pokemon.nombre}
                            jugador={jugador}
                            json={pokemon}
                            pokemonElegido={pokemonElegido}
                        />
                    )
                })}

            </ul>
            <CuadroEstadisticas pokemon={pokemonElegido} />

            <button
                className={`fondo-${pokemonElegido.color}`}
                onClick={()=>{callback()}}
            >
                Lo tengo
            </button>
        </div>
    );



}

