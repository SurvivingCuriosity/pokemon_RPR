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
import {
  userAttacksAction,
  cambiarTurnoAction,
  userUsesObjectAction,
} from "../../redux/Actions";
import { obtenerDialogoObjeto } from "../../static-data/dialogosNarrador";
import { getObjetoFromListaDisplay } from "../../helpers/funciones";

export function Combate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pokemon1, pokemon2, objetos1, objetos2, infoCombate, winner } =
    useSelector((state) => state);
  //muestra u oculta tarjetaUsuario
  const [narradorTrabajando, setNarradorTrabajando] = React.useState(true);
  //variable que controla el mostrar la informacion del combate
  const [mostrandoInfo, setMostrandoInfo] = React.useState(false);
  const [muestraPantallaFinal, setMuestraPantallaFinal] = React.useState(false);

  const [infoAtaque, setInfoAtaque] = React.useState({});

  const fondosTatami = [
    require("../../imgs/fondos/almendro.gif"),
    require("../../imgs/fondos/atardecer.gif"),
    require("../../imgs/fondos/ciudad.gif"),
    require("../../imgs/fondos/futuristico.gif"),
    require("../../imgs/fondos/noche.gif"),
    require("../../imgs/fondos/postapo.gif"),
    // Agrega aquí el resto de tus imágenes
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * fondosTatami.length);
    return fondosTatami[randomIndex];
  };

  const [fondo, setFondo] = React.useState(getRandomImage());
  
  //Texto que va diciendo el narrador
  const [cfgNarrador, setCfgNarrador] = React.useState({
    textos: obtenerDialogo(infoCombate, "inicioCombate"),
  });

  React.useEffect(() => {
    if (narradorTrabajando === false && winner !== null) {
      setMuestraPantallaFinal(true);
    }
  }, [narradorTrabajando]);

  React.useEffect(() => {
    console.log("Cambia infoataque y es: " + infoAtaque.animacion);
  }, [infoAtaque]);

  return (
    <>
      {/*Se muestra cuando se hace click en info*/}
      {mostrandoInfo && (
        <InfoCombateOverlay
          callback={() => {
            setMostrandoInfo(false);
          }}
          infoCombate={infoCombate}
        />
      )}
      {muestraPantallaFinal === false ? (
        <div className="combate-container page-container">
          <Link to="/" className="flecha-atras">
            ←
          </Link>
          <p
            onClick={() => {
              setMostrandoInfo(true);
            }}
            className="boton-info"
          >
            i
          </p>

          <div style={{ backgroundImage: `url(${fondo})` }} className="tatami">
            <TarjetaPokemonCombate
              jugador={2}
              datosIniciales={pokemon2}
              datosCombate={infoCombate.jugador2}
              turno={infoCombate.turno}
              objetos={objetos2}
              narradorTrabajando={narradorTrabajando}
              infoAtaque={infoAtaque}
            />
            <TarjetaPokemonCombate
              jugador={1}
              datosIniciales={pokemon1}
              datosCombate={infoCombate.jugador1}
              turno={infoCombate.turno}
              objetos={objetos1}
              narradorTrabajando={narradorTrabajando}
              infoAtaque={infoAtaque}
            />
          </div>

          {infoCombate.turno === 1 && (
            <Narrador
              cfg={cfgNarrador}
              callbackFin={handleFinNarracion}
              narradorTrabajando={narradorTrabajando}
            />
          )}
          {infoCombate.turno === 2 && (
            <Narrador
              cfg={cfgNarrador}
              callbackFin={handleFinNarracion}
              narradorTrabajando={narradorTrabajando}
            />
          )}
          {!narradorTrabajando && (
            <TarjetaUsuario
              objetos={infoCombate.turno === 1 ? objetos1 : objetos2}
              narradorTrabajando={narradorTrabajando}
              infoCombate={infoCombate}
              pokemonActivo={
                infoCombate.turno === 1
                  ? infoCombate.jugador1
                  : infoCombate.jugador2
              }
              callbackAtack={userAttacks}
              callbackObjeto={userUsesObject}
            />
          )}
        </div>
      ) : (
        <PantallaFinal ganador={winner} infoCombate={infoCombate} />
      )}
      {/*Muestra el combate o la pantalla final si elcombate ha terminado*/}
    </>
  );

  function handleFinNarracion() {
    setCfgNarrador({
      textos: obtenerDialogo(infoCombate, "finNarracion"),
    });
    setNarradorTrabajando(false);

    //aqui deberia realizarse la accion como atacar o usar un objeto
  }

  function userAttacks(evt, turno) {
    let indiceAtaque = evt.target.textContent; //saca el texto dle boton: 0Ascuas
    indiceAtaque = indiceAtaque[0]; //saca el primer caracter: 0
    let ataque = infoCombate[`jugador${turno}`].ataques[indiceAtaque];

    setInfoAtaque(ataque);

    setNarradorTrabajando(true);
    setCfgNarrador({
      textos: obtenerDialogo(infoCombate, "ataque", ataque.nombre, ""),
    });

    dispatch(userAttacksAction(turno, indiceAtaque));
    dispatch(cambiarTurnoAction(turno));
  }

  /**TODO:
   */
  function userUsesObject(evt, turno) {
    setNarradorTrabajando(true);
    let objeto = getObjetoFromListaDisplay(evt.target.textContent);

    if (turno === 1) {
      objetos1.forEach((obj) => {
        if (obj.nombre === objeto.nombre) {
          if (obj.usos <= 0) {
            console.log("Sin usos");
            //no le quedan usos al objeto
            setNarradorTrabajando(true);
            setCfgNarrador({
              textos: obtenerDialogo(
                infoCombate,
                "sin usos",
                "",
                "",
                objeto.nombre
              ),
            });
          } else {
            //no le quedan usos al objeto
            setNarradorTrabajando(true);
            setCfgNarrador({
              textos: obtenerDialogoObjeto(infoCombate, objeto),
            });
            dispatch(userUsesObjectAction(turno, objeto));
            dispatch(cambiarTurnoAction(turno));
          }
        }
      });
    } else if (turno === 2) {
      objetos2.forEach((obj) => {
        if (obj.nombre === objeto.nombre) {
          if (obj.usos <= 0) {
            console.log("Sin usos");
            //no le quedan usos al objeto
            setNarradorTrabajando(true);
            setCfgNarrador({
              textos: obtenerDialogo(
                infoCombate,
                "sin usos",
                "",
                "",
                objeto.nombre
              ),
            });
          } else {
            setNarradorTrabajando(true);
            setCfgNarrador({
              textos: obtenerDialogoObjeto(infoCombate, objeto),
            });
            dispatch(userUsesObjectAction(turno, objeto));
            dispatch(cambiarTurnoAction(turno));
          }
        }
      });
    }
  }
}
