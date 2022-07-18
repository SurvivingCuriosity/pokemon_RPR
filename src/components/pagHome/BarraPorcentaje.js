import React from "react";

export function BarraPorcentaje(props) {
    
    const {porcentaje, color} = props;

  return (
    <>
        <div className="barra-porcentaje">
            <div style={{width:`${porcentaje}%`, backgroundColor:`var(--${color})`}}></div>
        </div>
    </>
  );



}

