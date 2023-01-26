//Importaciones necesarias
import React from "react";
import { Link, useNavigate } from "react-router-dom";
//Componentes
import { Narrador } from "./Narrador";
import { TarjetaPokemonCombate } from "./TarjetaPokemonCombate";
import { TarjetaUsuario } from "./TarjetaUsuario";
import { obtenerDialogo } from "../../static-data/dialogosNarrador";
import { InfoCombateOverlay } from "./InfoCombateOverlay";
import { PantallaFinal } from "./PantallaFinal";
import { useDispatch, useSelector } from "react-redux";
import { userAttacksAction, cambiarTurnoAction } from "../../redux/Actions";

export function Combate() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pokemon1, pokemon2, objetos1, objetos2, infoCombate, winner } = useSelector(state => state);
    //muestra u oculta tarjetaUsuario
    const [narradorTrabajando, setNarradorTrabajando] = React.useState(true);
    //variable que controla el mostrar la informacion del combate
    const [mostrandoInfo, setMostrandoInfo] = React.useState(false);
    const [muestraPantallaFinal, setMuestraPantallaFinal] = React.useState(false);

    React.useEffect(() => {
        if (pokemon1 === null || pokemon2 === null) {
            localStorage.clear();
            navigate('/');
        }
    }, []);

    //Texto que va diciendo el narrador
    const [cfgNarrador, setCfgNarrador] = React.useState({
        textos: obtenerDialogo(infoCombate, 'inicioCombate')
    });

    React.useEffect(() => {
        if (narradorTrabajando === false && winner !== null) {
            setMuestraPantallaFinal(true)
        }
    }, [narradorTrabajando])

    return (
        <>
            {/*Se muestra cuando se hace click en info*/}
            {mostrandoInfo &&
                <InfoCombateOverlay
                    callback={() => { setMostrandoInfo(false) }}
                    infoCombate={infoCombate}
                />
            }
            {muestraPantallaFinal === false
                ?
                <div className="combate-container page-container">
                    <Link to='/' className="flecha-atras">←</Link>
                    <p onClick={() => { setMostrandoInfo(true) }} className="boton-info">i</p>

                    <div className="tatami">
                        <TarjetaPokemonCombate
                            jugador={2}
                            datosIniciales={pokemon2}
                            datosCombate={infoCombate.jugador2}
                            turno={infoCombate.turno}
                            objetos={objetos2}
                            narradorTrabajando={narradorTrabajando}
                        />
                        <TarjetaPokemonCombate
                            jugador={1}
                            datosIniciales={pokemon1}
                            datosCombate={infoCombate.jugador1}
                            turno={infoCombate.turno}
                            objetos={objetos1}
                            narradorTrabajando={narradorTrabajando}
                        />
                    </div>

                    {infoCombate.turno === 1 &&
                        <Narrador
                            cfg={cfgNarrador}
                            callbackFin={handleFinNarracion}
                            narradorTrabajando={narradorTrabajando}
                        />
                    }
                    {infoCombate.turno === 2 &&
                        <Narrador
                            cfg={cfgNarrador}
                            callbackFin={handleFinNarracion}
                            narradorTrabajando={narradorTrabajando}
                        />
                    }
                    {(!narradorTrabajando) &&
                        <TarjetaUsuario
                            objetos={infoCombate.turno === 1 ? objetos1 : objetos2}
                            narradorTrabajando={narradorTrabajando}
                            infoCombate={infoCombate}
                            pokemonActivo={infoCombate.turno === 1 ? infoCombate.jugador1 : infoCombate.jugador2}
                            callbackAtack={userAttacks}
                            callbackObjeto={userUsesObject}
                        />
                    }
                </div>
                :
                <PantallaFinal
                    ganador={winner}
                    infoCombate={infoCombate}
                />
            }
            {/*Muestra el combate o la pantalla final si elcombate ha terminado*/}




        </>
    );


    function handleFinNarracion() {
        setCfgNarrador({
            textos: obtenerDialogo(infoCombate, 'finNarracion')
        })
        setNarradorTrabajando(false);
    }

    function userAttacks(evt, turno) {
        let indiceAtaque = evt.target.textContent;//saca el texto dle boton: 0Ascuas
        indiceAtaque = indiceAtaque[0];//saca el primer caracter: 0
        let nombreAtaque = infoCombate[`jugador${turno}`].ataques[indiceAtaque].nombre;

        setNarradorTrabajando(true);
        setCfgNarrador({
            textos: obtenerDialogo(infoCombate, 'ataque', nombreAtaque, '')
        })

        dispatch(userAttacksAction(turno, indiceAtaque));
        dispatch(cambiarTurnoAction(turno));
    }

    /**TODO: 
    */
    function userUsesObject(evt, jugador) {
        // setNarradorTrabajando(true);
        // let objeto = getObjetoFromListaDisplay(evt.target.textContent);
        // switch (objeto.tipo) {
        //     case 'cura':

        //         setNarradorTrabajando(true);
        //         setCfgNarrador({
        //             textos: obtenerDialogoObjeto(infoCombate, objeto)
        //         })

        //         curar(jugador, objeto.cantidadCura);

        //         break;
        //     case 'ataque':
        //         //TODO:20
        //         setNarradorTrabajando(true);
        //         setCfgNarrador({
        //             textos: obtenerDialogoObjeto(infoCombate, objeto)
        //         })
        //         quitarVida(jugador, 20);
        //         break;
        //     case 'alteraStats':
        //         setNarradorTrabajando(true);
        //         setCfgNarrador({
        //             textos: obtenerDialogoObjeto(infoCombate, objeto)
        //         })
        //         alterarPropiedades(jugador)
        //         break;
        //     case 'eleccion':
        //         setNarradorTrabajando(true);
        //         setCfgNarrador({
        //             textos: obtenerDialogoObjeto(infoCombate, objeto)
        //         })
        //         break;
        //     case 'amuleto':
        //         setNarradorTrabajando(true);
        //         setCfgNarrador({
        //             textos: obtenerDialogoObjeto(infoCombate, objeto)
        //         })
        //         break;
        //     default:
        //         setNarradorTrabajando(true);
        //         setCfgNarrador({
        //             textos: obtenerDialogoObjeto(infoCombate, objeto)
        //         })
        //         break;
        // }
        // cambiarTurno();
    }

    // function quitarVida(aQuien, cuanto) {
    //     switch (aQuien) {
    //         case 1:
    //             setInfoCombate((prev) => {
    //                 return {
    //                     ...prev,
    //                     jugador1: {
    //                         ...prev.jugador1,
    //                         propiedades: {
    //                             ...prev.jugador1.propiedades,
    //                             vida: Math.round(infoCombate.jugador1.propiedades.vida - cuanto)
    //                         }
    //                     }
    //                 }
    //             })
    //             break;
    //         case 2:
    //             setInfoCombate((prev) => {
    //                 return {
    //                     ...prev,
    //                     jugador2: {
    //                         ...prev.jugador2,
    //                         propiedades: {
    //                             ...prev.jugador2.propiedades,
    //                             vida: Math.round(infoCombate.jugador2.propiedades.vida - cuanto)
    //                         }
    //                     }
    //                 }
    //             })
    //             break;
    //         default:
    //     }
    // }

    // function curar(aQuien, cuanto) {
    //     let vidaActual;
    //     let nuevaVida;
    //     let vidaInicial = getVidaInicial(infoCombate.jugador1.nombre);
    //     if (aQuien === 1) {
    //         vidaActual = infoCombate.jugador1.propiedades.vida * 1
    //         nuevaVida = vidaActual * 1 + cuanto * 1;
    //         if (nuevaVida > vidaInicial) {
    //             nuevaVida = vidaInicial
    //         }
    //         setInfoCombate((prev) => {
    //             return {
    //                 ...prev,
    //                 jugador1: {
    //                     ...prev.jugador1,
    //                     propiedades: {
    //                         ...prev.jugador1.propiedades,
    //                         vida: Math.round(nuevaVida)
    //                     }
    //                 }
    //             }
    //         })
    //     } else if (aQuien === 2) {
    //         vidaActual = infoCombate.jugador2.propiedades.vida * 1;
    //         nuevaVida = vidaActual * 1 + cuanto * 1;
    //         vidaInicial = getVidaInicial(infoCombate.jugador2.nombre);
    //         if (nuevaVida > vidaInicial) {
    //             nuevaVida = vidaInicial
    //         }
    //         setInfoCombate((prev) => {
    //             return {
    //                 ...prev,
    //                 jugador2: {
    //                     ...prev.jugador2,
    //                     propiedades: {
    //                         ...prev.jugador2.propiedades,
    //                         vida: Math.round(nuevaVida)
    //                     }
    //                 }
    //             }
    //         })
    //     }
    //     dispatch(curar(aQuien, cuanto));
    // }

    function alterarPropiedades() {

    }
}

