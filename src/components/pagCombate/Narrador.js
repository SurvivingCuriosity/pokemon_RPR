import React from "react";

export function Narrador(props) {
//VARIABLES
  const {cfg, narradorTrabajando=true, callbackFin} = props
  const [indiceTextoActivo, setIndiceTextoActivo] = React.useState(0);

//FUTURA IMPLENTACION HANDLE CLICK
    const mostrarSiguienteTexto = () => {
      if(indiceTextoActivo === cfg.textos.length-1){
        setIndiceTextoActivo(0);
        callbackFin();
        return;
      }
      if(!narradorTrabajando){
        return;
      }else{
        setIndiceTextoActivo(prev => {return prev+1})
      }

    }
    React.useEffect(()=>{

    },[])

    React.useEffect(()=>{
      if(indiceTextoActivo === cfg.textos.length+1){
        callbackFin();
        return;
      }
    },[indiceTextoActivo])

  return (
    <>
        <div className="pantalla-narrador">
          <p onClick={mostrarSiguienteTexto} className={`${cfg.textos[indiceTextoActivo].animacion}`}>{cfg.textos[indiceTextoActivo].texto}</p>
        </div>
    </>
  );



}

