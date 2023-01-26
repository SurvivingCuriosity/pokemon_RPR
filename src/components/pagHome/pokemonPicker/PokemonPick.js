import React from "react";
import { useDispatch } from "react-redux";
import { getPokemonFromLista } from "../../../helpers/funciones";
import { setPokemon } from "../../../redux/Actions";

export function PokemonPick(props) {
    const dispatch = useDispatch();
    const { json, jugador, pokemonElegido } = props;


    const handleClickPokemon = (evt) => {
        dispatch(setPokemon(jugador, getPokemonFromLista(evt.target.value)))
    }

    return (
        <>
            <div className="imagen-y-flecha" onClick={handleClickPokemon} id={json.nombre}>
                <label>
                    <input defaultChecked={pokemonElegido.nombre === json.nombre} className='hidden-radio' type="radio" value={json.nombre} name={jugador} />
                    <img id={json.nombre} src={json.imagen} alt="imagen pokemon"></img>
                    <span></span>
                </label>
            </div>
        </>
    );



}

