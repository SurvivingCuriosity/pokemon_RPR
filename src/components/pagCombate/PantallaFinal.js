import React from "react";
import { Link } from "react-router-dom";
export function PantallaFinal(props) {

  return (
    <div className={`pantalla-final`}>
        <p>Pantalla final</p>
        <Link to='/' className="flecha-atras">←</Link>
    </div>
  );

}

