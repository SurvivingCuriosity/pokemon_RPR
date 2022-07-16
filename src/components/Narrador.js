import React from "react";

export function Narrador(props) {
    
    const {cfg} = props;

    let contenidoActivo = (
        <>
            <p className={cfg.animacion}>{cfg.texto}</p>
            <p className='delay-fade-in'>Click para avanzar...</p>
        </>
    )
    

    const handleClick = (evt) => {
        
    }


  return (
    <>
        <div className="pantalla-narrador">
            {contenidoActivo}
        </div>
    </>
  );



}

