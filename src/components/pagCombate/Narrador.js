import React from "react";

export function Narrador({cfg}) {
//VARIABLES
    const {animacion, texto} = cfg;

//FUTURA IMPLENTACION HANDLE CLICK
    const handleClick = (evt) => {
        
    }

  return (
    <>
        <div className="pantalla-narrador">
        <p className={animacion}>{texto}</p>
            <p className='delay-fade-in'>Click para avanzar...</p>
        </div>
    </>
  );



}

