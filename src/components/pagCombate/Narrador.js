import React from "react";

export function Narrador(props) {
//VARIABLES
  const {cfg, narradorTrabajando} = props

  console.log(cfg);

//FUTURA IMPLENTACION HANDLE CLICK
    const handleClick = (evt) => {
        
    }

  return (
    <>
        <div className="pantalla-narrador">
            {cfg.textos.map((t)=>{
              return(
                <p key={t.texto} className={`${t.animacion}`}>{t.texto}</p>
              )
            })}
        </div>
    </>
  );



}

