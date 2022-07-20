//Importaciones necesarias
import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { getObjetoFromLista } from "../../helpers/funciones";
import { getVidaInicial } from "../../helpers/funciones";
//Componentes
import { Narrador } from "./Narrador";
import { TarjetaPokemonCombate } from "./TarjetaPokemonCombate";
import { TarjetaUsuario } from "./TarjetaUsuario";
import { obtenerDialogo } from "../../static-data/dialogosNarrador";
import { InfoCombateOverlay } from "./InfoCombateOverlay";
import { PantallaFinal } from "./PantallaFinal";
export function Combate(props) {
//muestra u oculta tarjetaUsuario
    const [narradorTrabajando, setNarradorTrabajando] = React.useState(true);

//variable que indica el final del juego
    const [fin, setFin] = React.useState(false);

//variable que controla el mostrar la informacion del combate
    const [mostrandoInfo, setMostrandoInfo] = React.useState(false);

//objetos pokemon obtenidos del localstorage    
    const [pokemon1LS] = useLocalStorage("pokemon1");
    const [pokemon2LS] = useLocalStorage("pokemon2");
    
    const [objetos1LS] = useLocalStorage("objetos1");
    const [objetos2LS] = useLocalStorage("objetos2");

//variable que contiene la información del combate 
//toma el valor inicial de lo almacenado en el localstorage
    const [infoCombate, setInfoCombate] = React.useState({
        'jugador1': pokemon1LS,
        'jugador2': pokemon2LS,
        'turno': 1
    })

//Texto que va diciendo el narrador
    const [cfgNarrador, setCfgNarrador] = React.useState({
        textos: obtenerDialogo(infoCombate, 'inicioCombate')
    });


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
            finDeLaPartida();
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
        {/*Se muestra cuando se hace click en info*/}
            {mostrandoInfo && 
                <InfoCombateOverlay 
                    callback={()=>{setMostrandoInfo(false)}}
                    infoCombate={infoCombate}
                />
            }
        {/*Muestra el combate o la pantalla final si elcombate ha terminado*/}
            {fin===false ? 
                <div className="combate-container page-container">
                    <Link to='/' className="flecha-atras">←</Link>
                    <p onClick={()=>{setMostrandoInfo(true)}} className="boton-info">i</p>
                    
                    <div className="tatami">
                        <TarjetaPokemonCombate 
                            amuleto={objetos1LS[4]}
                            jugador={2}
                            infoPokemon={infoCombate['jugador2']}
                            turno={infoCombate['turno']}
                        />
                        <TarjetaPokemonCombate 
                            amuleto={objetos2LS[4]}
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
                    {(!narradorTrabajando) &&
                        <TarjetaUsuario 
                            objetos={infoCombate.turno===1 ? objetos1LS : objetos2LS}
                            narradorTrabajando={narradorTrabajando}
                            infoCombate={infoCombate}
                            pokemonActivo={infoCombate.turno===1 ? infoCombate.jugador1 : infoCombate.jugador2}
                            callbackAtack={userAttacks}
                            callbackObjeto={userUsesObject}
                        /> 
                    }
                </div>
            :
            <PantallaFinal 
                
            />
            }
        </>
    );


    function handleFinNarracion(){
        setCfgNarrador({
            textos: obtenerDialogo(infoCombate, 'finNarracion')
        })
        setNarradorTrabajando(false);
    }

    function cambiarTurno(){
        setInfoCombate((prev)=>{
            return{
                ...prev,
                turno: infoCombate.turno===1 ? 2 : 1
            }
        })
    }

    function curar(aQuien, cuanto){
        let vidaActual;
        let nuevaVida;
        let vidaInicial = getVidaInicial(infoCombate.jugador1.nombre);
        if(aQuien === 1){
            vidaActual=infoCombate.jugador1.propiedades.vida*1
            nuevaVida = vidaActual*1+cuanto*1;
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

    function finDeLaPartida(){
        window.setTimeout(()=>{
            setFin(true)
        },2000)
    }
}

