//Importaciones necesarias
import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { pokemons } from "../../pokemon-data/pokemons";
import { objetos } from "../../pokemon-data/objetos";
//Componentes
import { Narrador } from "./Narrador";
import { TarjetaPokemonCombate } from "./TarjetaPokemonCombate";
import { TarjetaUsuario } from "./TarjetaUsuario";
import { obtenerDialogo } from "../../pokemon-data/dialogosNarrador";
import { InfoCombateOverlay } from "./InfoCombateOverlay";

export function Combate(props) {
    const [narradorTrabajando, setNarradorTrabajando] = React.useState(true);
    

//objetos pokemon obtenidos del localstorage    
    const [pokemon1LS] = useLocalStorage("pokemon1");
    const [pokemon2LS] = useLocalStorage("pokemon2");

//variable que contiene la información del combate
    const [infoCombate, setInfoCombate] = React.useState({
        'jugador1': pokemon1LS,
        'jugador2': pokemon2LS,
        'turno': 1
    })

//variable que indica el final del juego
    const [fin, setFin] = React.useState(false);
    const [mostrandoInfo, setMostrandoInfo] = React.useState(false);

//Texto que va diciendo el narrador
    const [cfgNarrador, setCfgNarrador] = React.useState({
        textos: obtenerDialogo(infoCombate, 'inicioCombate')
    });

//Se ejecuta cada vez que cambia el turno
    React.useEffect(()=>{
        console.log(infoCombate);
        if(!narradorTrabajando){
            console.log('no');
        }else{
            console.log('si');
        }
        
    },[infoCombate])

    React.useEffect(()=>{

    },[])

//Funcion que seejecuta cuando un usuario ataca. EVT nos dice qué ataque ha usdao. Jugador es quién ha atacado (1 o 2)
    const userAttacks = (evt, jugador) =>{
        let atackIndex;
        atackIndex = evt.target.textContent
        atackIndex=atackIndex[0];
        let nombreAtaque = infoCombate[`jugador${jugador}`].ataques[atackIndex].nombre;

        setNarradorTrabajando(true);
        setCfgNarrador({
            textos: obtenerDialogo(infoCombate, 'ataque',nombreAtaque ,'' )

        })
        let potenciaDelAtaque;
        let ataqueEmisor;
        let defensaVictima;
        let indiceVictima;
        let danoCausado;
        jugador === 1 ? indiceVictima=2 : indiceVictima=1

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
        //si lo ha matado
        if(Math.round(vidaVictima-danoCausado) <= 0){
            setCfgNarrador({
                textos: obtenerDialogo(infoCombate, 'victoria')
            })
            setFin(true);
            return;
        }

        cambiarTurno();
        
    }
    const userUsesObject = (evt, jugador) =>{
        setNarradorTrabajando(true);
        console.log(evt.target.textContent);
        let objeto = getObjetoFromLista(evt.target.textContent);
        switch (objeto.tipo) {
            case 'curativo':
                curar(jugador, objeto.cantidadCura);
                setNarradorTrabajando(true);
                setCfgNarrador({
                    textos: obtenerDialogo(infoCombate, 'objeto', '', objeto.nombre)
                })
                break;
            default:
                setNarradorTrabajando(true);
                setCfgNarrador({
                    textos: obtenerDialogo(infoCombate, 'objeto', '', objeto.nombre)
                })
                break;
        }
        cambiarTurno();
    }

  return (
    <>
        {mostrandoInfo && 
            <InfoCombateOverlay 
            callback={abrirCerrarInfoCombate}
            infoCombate={infoCombate}
            />
        }
        <div className="combate-container">
            <Link to='/' className="flecha-atras">←</Link>
            <p onClick={()=>{setMostrandoInfo(true)}} className="boton-info">i</p>
            
            <div className="tatami">
                <TarjetaPokemonCombate 
                    jugador={2}
                    infoPokemon={infoCombate['jugador2']}
                    turno={infoCombate['turno']}
                />
                <TarjetaPokemonCombate 
                    jugador={1}
                    infoPokemon={infoCombate['jugador1']}
                    turno={infoCombate['turno']}
                />
            </div>
            
            {infoCombate.turno===1 && 
                <Narrador
                    cfg={cfgNarrador}
                    callbackFin={handleFinNarracion}
                    narradorTrabajando={narradorTrabajando}
            />
            }
            {infoCombate.turno===2 && 
                <Narrador
                    cfg={cfgNarrador}
                    callbackFin={handleFinNarracion}
                    narradorTrabajando={narradorTrabajando}
            />
            }
            {(infoCombate.turno===1 && !narradorTrabajando) &&
                <TarjetaUsuario 
                    narradorTrabajando={narradorTrabajando}
                    colorBorde={infoCombate.jugador1.color==="" ? 'amarillo' : infoCombate.jugador1.color}
                    ataques={infoCombate.jugador1.ataques}
                    infoCombate={infoCombate}
                    callbackAtack={userAttacks}
                    callbackObjeto={userUsesObject}
                /> 
            }
            {(infoCombate.turno===2 && !narradorTrabajando) &&
                <TarjetaUsuario 
                    narradorTrabajando={narradorTrabajando}
                    colorBorde={infoCombate.jugador2.color || 'amarillo'}
                    ataques={infoCombate.jugador2.ataques}
                    infoCombate={infoCombate}
                    callbackAtack={userAttacks}
                    callbackObjeto={userUsesObject}
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
    function getObjetoFromLista(_nombre){
        let objeto = objetos.filter(objeto => objeto.nombre === _nombre)[0];
        return objeto;
    }
    function getVidaInicial(_nombre){
        let pokemon = pokemons.filter(pokemon => pokemon.nombre === _nombre)[0];
        return pokemon.propiedades.vida;
    }
    function handleFinNarracion(){
        console.log('Fin narrador');
        setCfgNarrador({
            textos: obtenerDialogo(infoCombate, 'finNarracion')
        })
        setNarradorTrabajando(false);
    }
    function cambiarTurno(){
        let nuevoTurno;
        infoCombate.turno===1 ? nuevoTurno=2 : nuevoTurno=1;
        setInfoCombate((prev)=>{
            return{
                ...prev,
                turno: nuevoTurno
            }
        })
    }
    function curar(aQuien, cuanto){
        let vidaActual;
        let nuevaVida;
        let vidaInicial;
        if(aQuien === 1){
            vidaActual=infoCombate.jugador1.propiedades.vida*1
            nuevaVida = vidaActual*1+cuanto*1;
            vidaInicial = getVidaInicial(infoCombate.jugador1.nombre);
            if(nuevaVida > vidaInicial){
                nuevaVida = vidaInicial
            }
            setInfoCombate((prev)=>{
                return{
                    ...prev,
                    jugador1:{
                        ...prev.jugador1,
                        propiedades:{
                            ...prev.jugador1.propiedades,
                            vida:Math.round(nuevaVida)
                        }
                    }
                }
            })
        } else if(aQuien === 2){
            vidaActual=infoCombate.jugador2.propiedades.vida*1;
            nuevaVida = vidaActual*1+cuanto*1;
            vidaInicial = getVidaInicial(infoCombate.jugador2.nombre);
            if(nuevaVida > vidaInicial){
                nuevaVida = vidaInicial
            }
            setInfoCombate((prev)=>{
                return{
                    ...prev,
                    jugador2:{
                        ...prev.jugador2,
                        propiedades:{
                            ...prev.jugador2.propiedades,
                            vida:Math.round(nuevaVida)
                        }
                    }
                }
            })
        }
    }
    function abrirCerrarInfoCombate(){
        setMostrandoInfo(false);
    }
}

