import React from "react";
import { useSelector } from "react-redux";

export function TarjetaPokemonCombate(props) {
  //PROPS
  const { jugador, turno, datosCombate, datosIniciales, objetos } = props;
  //ESTADO
  const [porcentaje, setPorcentaje] = React.useState(100);
  const [color, setColor] = React.useState('verde');

  React.useEffect(() => {
    let miPorcentaje;
    miPorcentaje = (datosCombate.propiedades.vida / datosIniciales.propiedades.vida) * 100;
    setPorcentaje(miPorcentaje);
  }, [datosCombate])

  React.useEffect(() => {
    if (porcentaje < 50 && porcentaje > 20) {
      setColor('naranja')
    } else
      if (porcentaje <= 20) {
        setColor('rojo')
      } else {
        setColor('verde')
      }
  }, [porcentaje])


  return (
    <div className="tarjeta-combate">
      <div className={datosCombate.propiedades.vida <= 0 ? 'muere' : ''}>
        <img className={turno === jugador ? 'salta' : ''} src={datosIniciales.imagen} alt='Icono pokemon'></img>
        <img className='imagen-amuleto' src={objetos[4].imagen} alt='Icono amuleto del pokemon'></img>
      </div>
      <div className="--tarjeta-combate-top">
        <p>{`J${jugador}: ${datosIniciales.nombre}`}</p>
        <p>{`${datosCombate.propiedades.vida}/${datosIniciales.propiedades.vida}`}</p>
      </div>
      <div className="barra-vida">
        <div className={`--barra-vida-vida fondo-${color}`} style={{ width: `${porcentaje}%` }}></div>
      </div>
    </div>
  );

}

