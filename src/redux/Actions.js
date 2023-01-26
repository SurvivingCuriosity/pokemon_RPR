import { calcularDano } from '../helpers/funcionesCombate';
import store from './ReduxStore';

export const resetBattle = (nombre) => async (dispatch) => {
    dispatch({ type: "RESET_BATTLE" });
}
export const setNombreJ1 = (nombre) => async (dispatch) => {
    dispatch({ type: "SET_J1_NAME", data: nombre });
}

export const setNombreJ2 = (nombre) => async (dispatch) => {
    dispatch({ type: "SET_J2_NAME", data: nombre });
}

export const setPokemon = (jugador, pokemon) => async (dispatch) => {
    if(jugador===1){
        dispatch({ type: "SET_J1_POKEMON", data: pokemon });
    }else if(jugador===2){
        dispatch({ type: "SET_J2_POKEMON", data: pokemon });
    }
}

export const setObjetos = (jugador, objetos) => async (dispatch) => {
    if(jugador===1){
        dispatch({ type: "SET_J1_OBJECTS", data: objetos });
    }else if(jugador===2){
        dispatch({ type: "SET_J2_OBJECTS", data: objetos });
    }
}

export const iniciarBatalla = () => async (dispatch) => {
    dispatch({ type: "INIT_BATALLA"});
}

export const cambiarTurnoAction = (turno) => async (dispatch) => {
    dispatch({ type: "CAMBIAR_TURNO", turnoActual: turno});
    
    if(store.getState().infoCombate.jugador1.propiedades.vida <= 0){
        dispatch({ type: "WIN", winner: store.getState().infoCombate.jugador2 });
    }
    if(store.getState().infoCombate.jugador2.propiedades.vida <= 0){
        dispatch({ type: "WIN", winner: store.getState().infoCombate.jugador1 });
    }
}

export const userAttacksAction = (turno, indiceAtaque) => async (dispatch) => {
    let danoCausado = calcularDano(turno, indiceAtaque);
    switch(turno){
        //ataca el jugador 1
        case 1:
            dispatch({ type: "SET_J2_VIDA", nuevaVida: store.getState().infoCombate.jugador2.propiedades.vida-danoCausado});
            break;    
        case 2:
        //ataca el jugador 2
            dispatch({ type: "SET_J1_VIDA", nuevaVida: store.getState().infoCombate.jugador1.propiedades.vida-danoCausado});
            break;
    }
}

export const userUsesObjectAction = (turno, indiceAtaque) => async (dispatch) => {
    console.log('actions: User '+ turno +' attacks '+ indiceAtaque);
    let danoCausado = calcularDano(turno, indiceAtaque);
    switch(turno){
        //ataca el jugador 1
        case 1:
            dispatch({ type: "SET_J2_VIDA", nuevaVida: store.getState().infoCombate.jugador2.propiedades.vida-danoCausado});
            break;    
        case 2:
        //ataca el jugador 2
            dispatch({ type: "SET_J1_VIDA", nuevaVida: store.getState().infoCombate.jugador1.propiedades.vida-danoCausado});
            break;
    }
    dispatch({ type: "CAMBIAR_TURNO", turnoActual: turno});
}
