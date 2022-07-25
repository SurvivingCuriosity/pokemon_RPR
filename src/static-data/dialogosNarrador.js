
export function obtenerDialogo(infoCombate, nombreDialogo, ataque='ataque desconocido', objeto='objeto desconocido'){
    let dialogoReturn;
    let pokemonCausante;
    if(infoCombate.turno===1){
        pokemonCausante=infoCombate.jugador1;
    }else if(infoCombate.turno===2){
        pokemonCausante=infoCombate.jugador2;
    }
    switch (nombreDialogo) {
        case 'inicioCombate':
            dialogoReturn =   
                [
                    {texto: 'CHAN...CHAN....CHANNN', duracion:'corto', animacion:'typying'},
                    {texto: 'Bienvenidos al combate', duracion:'medio', animacion:'fade-in'},
                    {texto: 'PREPARADOS?......YAAAA!!!!', duracion:'medio', animacion:'typying'}
                ]
            break;
        case 'ataque':
            dialogoReturn = 
                [
                    {texto: `${pokemonCausante.nombre} usó ${ataque}`, duracion:'corto', animacion:'typying'},
                ]
            break;
        case 'objeto':
            dialogoReturn = 
                [
                    {texto: `${pokemonCausante.nombre} usó ${objeto}`, duracion:'corto', animacion:'typying'},
                ]
                break;
        case 'turno':
            dialogoReturn = 
                [
                    {texto: `Turno del jugador ${infoCombate.turno} (${pokemonCausante.nombre}).`, duracion:'corto', animacion:'typying'},
                ]
                break;
        case 'victoria':
            dialogoReturn = 
                [
                    {texto: `${pokemonCausante.nombre} aplastó a su oponente`, duracion:'corto', animacion:'typying'},
                ]
                break;
        case 'finNarracion':
            dialogoReturn = 
                [
                    {texto: `(...)`, duracion:'corto', animacion:'typying'},
                ]
                break;
        default:
            break;
    }
    return dialogoReturn;
}