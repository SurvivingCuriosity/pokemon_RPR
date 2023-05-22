import { pokemons } from "../static-data/pokemons";
import { objetos } from "../static-data/objetos";
//funcion que devuelve un pokemon del array con todos los pokemons buscando por nombre
export function getPokemonFromLista(_nombre){
    let pokemon = pokemons.filter(pokemon => pokemon.nombre === _nombre)[0];
    return pokemon;
}

export function getObjetoFromLista(_nombre){
    let objReturn;
    objetos.forEach(categoria => {
        categoria.objetos.forEach(objeto => {
            if(objeto.nombre===_nombre){
                objReturn=objeto;
            }
        });
    });
    return objReturn;
}
export function getObjetoFromListaDisplay(_nombre){
    let nombreObjeto = _nombre.substring(0, _nombre.length - 3);
    nombreObjeto=nombreObjeto.trim();
    let objReturn;
    objetos.forEach(categoria => {
        categoria.objetos.forEach(objeto => {
            if(objeto.nombreDisplay===nombreObjeto){
                objReturn=objeto;
            }
        });
    });
    return objReturn;
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
