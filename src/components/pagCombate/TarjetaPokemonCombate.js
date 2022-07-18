import React from "react";


export function TarjetaPokemonCombate(props) {
//PROPS
    const {infoPokemon, jugador, turno} = props;

//ESTADO
    const [vidaInicial, setVidaInicial] = React.useState(infoPokemon.propiedades.vida);

    let vidaActual = infoPokemon.propiedades.vida;
    vidaActual < 0 ? vidaActual=0 : vidaActual=vidaActual

    const [porcentaje, setPorcentaje] = React.useState(100);
    const [color, setColor] = React.useState('verde');

    React.useEffect(()=>{
      //console.log('InfoPokemon cambia. Calculando porcentaje de vida. Actual: '+porcentaje);
      let miPorcentaje;
      miPorcentaje=(vidaActual/vidaInicial)*100;
      setPorcentaje(miPorcentaje);
      //console.log('Porcentaje teoricamente cambiado:'+porcentaje);
    },[infoPokemon])

    React.useEffect(()=>{
      //console.log('Porcentaje cambia. Calculando color de vida. Actual: '+color);
      if(porcentaje<50 && porcentaje>20){
        setColor('naranja')
      }else
      if(porcentaje<=20){
        setColor('rojo')
      }else{
        setColor('verde')
      }
    },[porcentaje])
    



  return (
    <div className="tarjeta-combate">
      <div className={infoPokemon.propiedades.vida <=0 ? 'muere' : ''}>
        <img className={turno===jugador ? 'salta' : ''} src={infoPokemon.imagen} alt='Icono pokemon'></img>
      </div>
        <div className="--tarjeta-combate-top">
            <p>{`J${jugador}: ${infoPokemon.nombre}`}</p>
            <p>{`${vidaActual}/${vidaInicial}`}</p>
        </div>
        <div className="barra-vida">

              <div className={`--barra-vida-vida fondo-${color}`} style={{width: `${porcentaje}%`}}></div>

        </div>
    </div>
  );

}

