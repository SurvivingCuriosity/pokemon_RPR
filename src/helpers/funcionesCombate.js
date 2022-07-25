export function calcularDano(turno,atackIndex,infoCombate){
    console.log('============CALCULANDO DANO');
    
    let potenciaDelAtaque;
    let ataqueEmisor;
    let defensaVictima;
    let indiceVictima;
    turno===1 ? indiceVictima=2 : indiceVictima=1
    let danoCausado;

    //Obtener las propiedades del ataque que ha utilizado
    

    potenciaDelAtaque = infoCombate[`jugador${turno}`].ataques[atackIndex].potencia;
    defensaVictima = infoCombate[`jugador${indiceVictima}`].propiedades.defensa;
    ataqueEmisor = infoCombate[`jugador${turno}`].propiedades.ataque;
    danoCausado = potenciaDelAtaque * (ataqueEmisor/defensaVictima);

    return danoCausado;
}