//Importaciones necesarias
import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { pokemons } from "../../pokemon-data/pokemons";
//Componentes
import { Narrador } from "./Narrador";
import { TarjetaPokemonCombate } from "./TarjetaPokemonCombate";
import { TarjetaUsuario } from "./TarjetaUsuario";

export function Combate() {
//recuperamos los datos del localstorage (qué pokemons haelegido el usuario)
    const [pokemon1LS, setPokemon1LS] = useLocalStorage("pokemon1");
    const [pokemon2LS, setPokemon2LS] = useLocalStorage("pokemon2");
    
//variable que contiene la información del combate
    const [infoCombate, setInfoCombate] = React.useState({
        'jugador1': getPokemonFromLista(pokemon1LS),
        'jugador2': getPokemonFromLista(pokemon2LS),
        'turno': 1
    })
//variable que indica el final del juego
    const [fin, setFin] = React.useState(false);

//Texto que va diciendo el narrador
    const [cfgNarrador, setCfgNarrador] = React.useState({
        texto:`Turno del jugador ${infoCombate.turno}`,
        animacion:'typying'
    });

    React.useEffect(()=>{
        setCfgNarrador({
            texto:`Turno del jugador ${infoCombate.turno}`,
            animacion:'typying'
        })
    },[infoCombate.turno])

//Funcion que seejecuta cuando un usuario ataca. EVT nos dice qué ataque ha usdao. Jugador es quién ha atacado (1 o 2)
    const userAttacks = (evt, jugador) =>{
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
                setInfoCombate((prev)=>{
                    return{
                        ...prev,
                        jugador2:{
                            ...prev.jugador2,
                            propiedades:{
                                ...prev.jugador2.propiedades,
                                vida:Math.round(vidaVictima-danoCausado)
                            }
                        }
                    }
                })
                break;
            case 2:
                setInfoCombate((prev)=>{
                    return{
                        ...prev,
                        jugador1:{
                            ...prev.jugador1,
                            propiedades:{
                                ...prev.jugador1.propiedades,
                                vida: Math.round(vidaVictima-danoCausado)
                            }
                        }
                    }
                })
                break;
        }
        if(Math.round(vidaVictima-danoCausado) <= 0){
            setCfgNarrador({
                texto:`Jugador ${infoCombate.turno} gana`
            })
            setFin(true);
            return;
        }
        let nuevoTurno;
        infoCombate.turno===1 ? nuevoTurno=2 : nuevoTurno=1;
        setInfoCombate((prev)=>{
            return{
                ...prev,
                turno: nuevoTurno
            }
        })
    }

  return (
    <>
        <div className="combate-container">
            {fin && <Link to='/' className="boton-volver">Volver</Link>}
            
            <div className="tatami">
                <TarjetaPokemonCombate 
                    jugador={1}
                    infoPokemon={infoCombate['jugador1']}
                    turno={infoCombate['turno']}
                />
                <TarjetaPokemonCombate 
                    jugador={2}
                    infoPokemon={infoCombate['jugador2']}
                    turno={infoCombate['turno']}
                />
            </div>
            
            {infoCombate.turno===1 && 
                <Narrador
                    cfg={cfgNarrador}
            />
            }
            {infoCombate.turno===2 && 
                <Narrador
                    cfg={cfgNarrador}
            />
            }
            {infoCombate.turno===1 && 
                <TarjetaUsuario 
                    ataques={infoCombate.jugador1.ataques}
                    infoCombate={infoCombate}
                    callbackAtack={userAttacks}
                /> 
            }
            {infoCombate.turno===2 && 
                <TarjetaUsuario 
                    ataques={infoCombate.jugador2.ataques}
                    infoCombate={infoCombate}
                    callbackAtack={userAttacks}
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

