const initialState = {
    nombreJ1: null,
    pokemon1: null,
    objetos1: null,
    nombreJ2: null,
    pokemon2: null,
    objetos2: null,
    winner: null,
    infoCombate: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "RESET_BATTLE":
            return{
                nombreJ1: null,
                pokemon1: null,
                objetos1: null,
                nombreJ2: null,
                pokemon2: null,
                objetos2: null,
                winner: null,
                infoCombate: null
            };
        case "SET_J1_NAME":
            return { ...state, nombreJ1: action.data };
        case "SET_J2_NAME":
            return { ...state, nombreJ2: action.data };
        case "SET_J1_POKEMON":
            return { ...state, pokemon1: action.data };
        case "SET_J2_POKEMON":
            return { ...state, pokemon2: action.data };
        case "SET_J1_OBJECTS":
            return { ...state, objetos1: action.data };
        case "SET_J2_OBJECTS":
            return { ...state, objetos2: action.data };
        case "INIT_BATALLA":
            return {
                ...state, infoCombate: {
                    jugador1: state.pokemon1,
                    jugador2: state.pokemon2,
                    turno: state.pokemon1.propiedades.velocidad > state.pokemon2.propiedades.velocidad ? 1 : 2
                }
            };
        case "SET_J1_VIDA":
            return {
                ...state, infoCombate: {
                    ...state.infoCombate,
                    jugador1: {
                        ...state.infoCombate.jugador1,
                        propiedades:{
                            ...state.infoCombate.jugador1.propiedades,
                            vida: action.nuevaVida < 0 ? 0 : action.nuevaVida
                        }
                    }
                }
            };
        case "SET_J2_VIDA":
            return {
                ...state, infoCombate: {
                    ...state.infoCombate,
                    jugador2: {
                        ...state.infoCombate.jugador2,
                        propiedades:{
                            ...state.infoCombate.jugador2.propiedades,
                            vida: action.nuevaVida < 0 ? 0 : action.nuevaVida
                        }
                    }
                }
            };
        case "WIN":
            return {
                ...state,
                winner: action.winner
            };
        case "CAMBIAR_TURNO":
            return {
                ...state, infoCombate: {
                    ...state.infoCombate,
                    turno: action.turnoActual === 1 ? 2 : 1
                }
            };
        default:
            return state;
    }
};

export default reducer;