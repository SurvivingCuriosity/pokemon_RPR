import store from "../redux/ReduxStore";

export function calcularDano(turno, atackIndex) {
    console.log('============CALCULANDO DANO');

    let potenciaDelAtaque;
    let ataqueEmisor;
    let defensaVictima;
    let indiceVictima;
    turno === 1 ? indiceVictima = 2 : indiceVictima = 1
    let danoCausado;

    //Obtener las propiedades del ataque que ha utilizado


    potenciaDelAtaque = store.getState().infoCombate[`jugador${turno}`].ataques[atackIndex].potencia;
    defensaVictima = store.getState().infoCombate[`jugador${indiceVictima}`].propiedades.defensa;
    ataqueEmisor = store.getState().infoCombate[`jugador${turno}`].propiedades.ataque;
    danoCausado = potenciaDelAtaque * (ataqueEmisor / defensaVictima);
    
    return Math.floor(danoCausado);
}