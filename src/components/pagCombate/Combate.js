//Importaciones necesarias
import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { getObjetoFromListaDisplay } from "../../helpers/funciones";
import { getVidaInicial } from "../../helpers/funciones";
//Componentes
import { Narrador } from "./Narrador";
import { TarjetaPokemonCombate } from "./TarjetaPokemonCombate";
import { TarjetaUsuario } from "./TarjetaUsuario";
import { obtenerDialogo } from "../../static-data/dialogosNarrador";
import { InfoCombateOverlay } from "./InfoCombateOverlay";
import { PantallaFinal } from "./PantallaFinal";
import { calcularDano } from "../../helpers/funcionesCombate";
export function Combate() {
//muestra u oculta tarjetaUsuario
    const [narradorTrabajando, setNarradorTrabajando] = React.useState(true);
    //variable que controla el mostrar la informacion del combate
    const [mostrandoInfo, setMostrandoInfo] = React.useState(false);
    //variable que indica el final del juego
    const [fin, setFin] = React.useState(false);

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
        'turno': pokemon1LS.propiedades.velocidad>pokemon2LS.propiedades.velocidad ? 1 : 2
    })
    //Texto que va diciendo el narrador
    const [cfgNarrador, setCfgNarrador] = React.useState({
        textos: obtenerDialogo(infoCombate, 'inicioCombate')
    });


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
                ganador={infoCombate.jugador1.propiedades.vida <= 0 ? infoCombate.jugador2 : infoCombate.jugador1}
                infoCombate={infoCombate}
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

    function userAttacks(evt, turno){
        let indiceAtaque = evt.target.textContent;//saca el texto dle boton: 0Ascuas
        indiceAtaque=indiceAtaque[0];//saca el primer caracter: 0
        let nombreAtaque = infoCombate[`jugador${turno}`].ataques[indiceAtaque].nombre;
        

        setNarradorTrabajando(true);
        setCfgNarrador({
            textos: obtenerDialogo(infoCombate, 'ataque', nombreAtaque ,'' )
        })

        
        quitarVida(turno, calcularDano(turno, indiceAtaque,infoCombate));

        if(hayGanador()){
            setCfgNarrador({
                textos: obtenerDialogo(infoCombate, 'victoria')
            })
            finDeLaPartida();
        }else{
            cambiarTurno();
        }

        
    }
/**TODO: 
*/
    function userUsesObject(evt, jugador){
        setNarradorTrabajando(true);
        let objeto = getObjetoFromListaDisplay(evt.target.textContent);
        switch (objeto.tipo) {
            case 'cura':
                curar(jugador, objeto.cantidadCura);

                setNarradorTrabajando(true);
                setCfgNarrador({
                    textos: obtenerDialogo(infoCombate, 'objeto', '', objeto.nombre, objeto.dialogo)
                })
                break;
            case 'ataque':
                //TODO:20
                quitarVida(jugador, 20);
                setNarradorTrabajando(true);
                setCfgNarrador({
                    textos: obtenerDialogo(infoCombate, 'objeto', '', objeto.nombre)
                })
                break;
            case 'alteraStats':
                alterarPropiedades(jugador)
                setNarradorTrabajando(true);
                setCfgNarrador({
                    textos: obtenerDialogo(infoCombate, 'objeto', '', objeto.nombre)
                })
                break;
            case 'eleccion':
                setNarradorTrabajando(true);
                setCfgNarrador({
                    textos: obtenerDialogo(infoCombate, 'objeto', '', objeto.nombre)
                })
                break;
            case 'amuleto':
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

    function quitarVida(aQuien, cuanto){
        switch(aQuien){
            case 1:
                setInfoCombate((prev)=>{
                    return{
                        ...prev,
                        jugador1:{
                            ...prev.jugador1,
                            propiedades:{
                                ...prev.jugador1.propiedades,
                                vida:Math.round(infoCombate.jugador1.propiedades.vida-cuanto)
                            }
                        }
                    }
                })
                break;
            case 2:
                setInfoCombate((prev)=>{
                    return{
                        ...prev,
                        jugador2:{
                            ...prev.jugador2,
                            propiedades:{
                                ...prev.jugador2.propiedades,
                                vida:Math.round(infoCombate.jugador2.propiedades.vida-cuanto)
                            }
                        }
                    }
                })
                break;
                default:
        }
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

    function alterarPropiedades(){

    }

    function hayGanador(){
        let vida1 = Math.round(infoCombate.jugador1.propiedades.vida);
        let vida2 = Math.round(infoCombate.jugador2.propiedades.vida);
        if(vida1 <= 0 || vida2 <= 0){
            return true;
        }else{
            return false
        }
    }

    function finDeLaPartida(){
        window.setTimeout(()=>{
            setFin(true)
        },2000)
    }
}

