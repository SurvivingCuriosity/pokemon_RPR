//Importaciones necesarias
import React from "react";
//Para usar links
import { Link } from "react-router-dom";
//Para usar localstorage (almacenar datos en el navegador y recuperarlos en otra pagina)
import useLocalStorage from "use-local-storage";
//Pokemons: array que contiene la información de todos los pokemons
import { pokemons } from "../pokemon-data/pokemons";
//Componentes
import { Narrador } from "./Narrador";
import { TarjetaPokemonCombate } from "./TarjetaPokemonCombate";
import { TarjetaUsuario } from "./TarjetaUsuario";
import { TarjetaUsuario2 } from "./TarjetaUsuario2";

export function Combate() {
//recuperamos los datos del localstorage (qué pokemons haelegido el usuario)
    const [pokemon1LS, setPokemon1LS] = useLocalStorage("pokemon1");
    const [pokemon2LS, setPokemon2LS] = useLocalStorage("pokemon2");
    
//variable que contiene la información del combate
    let [infoCombate, setInfoCombate] = React.useState({
        'jugador1': getPokemonFromLista(pokemon1LS),
        'jugador2': getPokemonFromLista(pokemon2LS)
    })
//vida de cada uno de los pokemons
    let [vidaPokemon1, setVidaPokemon1] = React.useState(getPokemonFromLista(pokemon1LS).propiedades.vida);
    let [vidaPokemon2, setVidaPokemon2] = React.useState(getPokemonFromLista(pokemon2LS).propiedades.vida);

//turno (1 o 2)
    let [turno, setTurno] = React.useState(1);

//Texto que va diciendo el narrador
    let [cfgNarrador, setCfgNarrador] = React.useState({
        texto:`Turno del jugador ${turno}`,
        animacion:'typying'
    });
//Funcion que seejecuta cuando un usuario ataca. EVT nos dice qué ataque ha usdao. Jugador es quién ha atacado (1 o 2)
    const userAttacks = (evt, jugador) =>{
        let nuevoTurno;
        turno===1 ? nuevoTurno=2 : nuevoTurno=1;

        setTurno(nuevoTurno);
        let atackIndex;
        let potenciaDelAtaque;
        let ataqueEmisor;
        let defensaVictima;
        let indiceVictima;
        let danoCausado;
        jugador === 1 ? indiceVictima=2 : indiceVictima=1

        atackIndex = evt.target.textContent
        atackIndex=atackIndex[0];
        //Obtener las propiedades del ataque que ha utilizado
        potenciaDelAtaque = infoCombate[`jugador${jugador}`].ataques[atackIndex].potencia;
        defensaVictima = infoCombate[`jugador${indiceVictima}`].propiedades.defensa;
        ataqueEmisor = infoCombate[`jugador${jugador}`].propiedades.ataque;
        danoCausado = potenciaDelAtaque * (ataqueEmisor/defensaVictima);

        let vidaVictima= infoCombate[`jugador${indiceVictima}`].propiedades.vida;
        //restarle el daño a la vida de la victima
        // eslint-disable-next-line default-case
        switch(jugador){
            case 1:
                console.log('Ataca el jugador 1');
                setInfoCombate((prev)=>{
                    return{
                        ...prev,
                        jugador2:{
                            ...prev.jugador2,
                            propiedades:{
                                ...prev.jugador2.propiedades,
                                vida:20
                            }
                        }
                    }
                })
                setVidaPokemon2((prev)=>{
                    //si la vida final es menor que 0, devolvemos un 0 (prev es la vida que tiene el pokemon en este momento)
                    if(prev-danoCausado<0){
                        return(0)
                    }else{
                        return(Math.round(prev-danoCausado))
                    }
                });
                break;
            case 2:
                console.log('Ataca el jugador 2');
                setVidaPokemon1((prev)=>{
                    //si la vida final es menor que 0, devolvemos un 0
                    if(prev-danoCausado<0){
                        return(0)
                    }else{
                        return(Math.round(prev-danoCausado))
                    }
                });
                break;
        }
    }

  return (
    <>
        <div className="combate-container">
            <Link to='/' className="boton-volver">Volver</Link>
            
            <div className="tatami">
                <TarjetaPokemonCombate 
                    jugador={1}
                    _turno={turno}
                    infoPokemon={infoCombate['jugador1']}
                    vida={vidaPokemon1}
                />
                <TarjetaPokemonCombate 
                    jugador={2}
                    _turno={turno}
                    infoPokemon={infoCombate['jugador2']}
                    vida={vidaPokemon2}
                />
            </div>
            <Narrador
                cfg={cfgNarrador}
            />
            {turno===1 ? 
                <TarjetaUsuario 
                    _turno={turno}
                    ataques={infoCombate.jugador1.ataques}
                    callbackAtack={userAttacks}
                />
            : 
                <TarjetaUsuario2
                    _turno={turno}
                    ataques={infoCombate.jugador2.ataques}
                    callbackAtack={userAttacks}
                    infoCombate={infoCombate}
                />
            }
                
        </div>
    </>
  );

//funcion que devuelve un pokemon del array con todos los pokemons buscando por nombre
    function getPokemonFromLista(_nombre){
        let pokemon = pokemons.filter(pokemon => pokemon.nombre === _nombre)[0];
        return pokemon;
    }

}

