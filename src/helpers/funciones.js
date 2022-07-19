import { pokemons } from "../static-data/pokemons";
import { objetos } from "../static-data/objetos-copy";
//funcion que devuelve un pokemon del array con todos los pokemons buscando por nombre
export function getPokemonFromLista(_nombre){
    let pokemon = pokemons.filter(pokemon => pokemon.nombre === _nombre)[0];
    return pokemon;
}

export function getObjetoFromLista(_nombre, indiceCategoria){
    objetos[indiceCategoria].objetos.forEach(obj => {
        if(obj.nombre===_nombre){
            //return obj;
        }
        
    });
    return objetos[indiceCategoria].objetos[0];
}

export function getVidaInicial(_nombre){
    let pokemon = pokemons.filter(pokemon => pokemon.nombre === _nombre)[0];
    return pokemon.propiedades.vida;
}

export function getObjetosTipo(tipoObjeto){
    console.log('obteniendo objetos tipo '+tipoObjeto);
    let returnObjetos;
    returnObjetos = objetos.filter(obj => obj.tipo === tipoObjeto);
    return returnObjetos;
}