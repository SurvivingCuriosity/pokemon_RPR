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
    if (jugador === 1) {
        dispatch({ type: "SET_J1_POKEMON", data: pokemon });
    } else if (jugador === 2) {
        dispatch({ type: "SET_J2_POKEMON", data: pokemon });
    }
}

export const setObjetos = (jugador, objetos) => async (dispatch) => {
    if (jugador === 1) {
        dispatch({ type: "SET_J1_OBJECTS", data: objetos });
    } else if (jugador === 2) {
        dispatch({ type: "SET_J2_OBJECTS", data: objetos });
    }
}

export const iniciarBatalla = () => async (dispatch) => {
    dispatch({ type: "INIT_BATALLA" });
}

export const cambiarTurnoAction = (turno) => async (dispatch) => {
    dispatch({ type: "CAMBIAR_TURNO", turnoActual: turno });

    if (store.getState().infoCombate.jugador1.propiedades.vida <= 0) {
        dispatch({ type: "WIN", winner: store.getState().infoCombate.jugador2 });
    }
    if (store.getState().infoCombate.jugador2.propiedades.vida <= 0) {
        dispatch({ type: "WIN", winner: store.getState().infoCombate.jugador1 });
    }
}

export const userAttacksAction = (turno, indiceAtaque) => async (dispatch) => {
    let danoCausado = calcularDano(turno, indiceAtaque);
    if (turno === 1) {
        //ataca el jugador 1
        let vidaActualVictima = store.getState().infoCombate.jugador2.propiedades.vida;
        let nuevaVida = vidaActualVictima - danoCausado;
        if (nuevaVida < 0) nuevaVida = 0;
        dispatch({ type: "SET_J2_VIDA", nuevaVida: nuevaVida });
    } else if (turno === 2) {
        //ataca el jugador 2
        let vidaActualVictima = store.getState().infoCombate.jugador1.propiedades.vida;
        let nuevaVida = vidaActualVictima - danoCausado;
        if (nuevaVida < 0) nuevaVida = 0;
        dispatch({ type: "SET_J1_VIDA", nuevaVida: nuevaVida });
    }

}

export const userUsesObjectAction = (turno, objeto) => async (dispatch) => {
    switch (objeto.tipo) {
        case 'cura':
            let cantidadCura = objeto.efecto[0].cantidad;
            if (turno === 1) {
                let vidaInicial = store.getState().pokemon1.propiedades.vida;
                let vidaActual = store.getState().infoCombate.jugador1.propiedades.vida;
                let nuevaVida = vidaActual + cantidadCura;
                if (nuevaVida > vidaInicial) nuevaVida = vidaInicial;
                dispatch({ type: "J1_USES_OBJECT", objeto: objeto.nombre });
                dispatch({ type: "SET_J1_VIDA", nuevaVida: nuevaVida });
            } else if (turno === 2) {
                let vidaInicial = store.getState().pokemon2.propiedades.vida;
                let vidaActual = store.getState().infoCombate.jugador2.propiedades.vida;
                let nuevaVida = vidaActual + cantidadCura;
                if (nuevaVida > vidaInicial) nuevaVida = vidaInicial;
                dispatch({ type: "J2_USES_OBJECT", objeto: objeto.nombre });
                dispatch({ type: "SET_J2_VIDA", nuevaVida: nuevaVida });
            }
            break;
        case 'ataque':
            let danoCausado=objeto.efecto[0].cantidad;
            if (turno === 1) {
                //ataca el jugador 1
                let vidaActualVictima = store.getState().infoCombate.jugador2.propiedades.vida;
                let nuevaVida = vidaActualVictima - danoCausado;
                if (nuevaVida < 0) nuevaVida = 0;
                dispatch({ type: "SET_J2_VIDA", nuevaVida: nuevaVida });
            } else if (turno === 2) {
                //ataca el jugador 2
                let vidaActualVictima = store.getState().infoCombate.jugador1.propiedades.vida;
                let nuevaVida = vidaActualVictima - danoCausado;
                if (nuevaVida < 0) nuevaVida = 0;
                dispatch({ type: "SET_J1_VIDA", nuevaVida: nuevaVida });
            }
            break;
        case 'alteraStats':

            break;
        case 'eleccion':

            break;
        case 'amuleto':

            break;
        default:

            break;
    }
}
