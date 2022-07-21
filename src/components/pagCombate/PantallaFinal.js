import React from "react";
import { Link } from "react-router-dom";
import { CuadroEstadisticas } from "../pagHome/CuadroEstadisticas";
import gif_confeti from '../../imgs/objetos/confeti.webp'

export function PantallaFinal(props) {

  const {ganador, infoCombate} = props;

  return (
    <div className={`pantalla-final`}>
          <img src={gif_confeti}></img>
        <h1>Enhorabuena</h1>
          <img src={ganador.imagen}></img>
        <p>{ganador.nombre}</p>

        <Link to='/' className="flecha-atras">←</Link>
    </div>
  );

}

