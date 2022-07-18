import React from "react";

export function Narrador(props) {
//VARIABLES
  const {cfg, narradorTrabajando=true, callbackFin} = props
  const [indiceTextoActivo, setIndiceTextoActivo] = React.useState(0);
  const [mostrarTextoDelay, setMostrarTextoDelay] = React.useState(false);

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
      window.setTimeout(()=>{
        setMostrarTextoDelay(true);
      },5000)
    },[])

    React.useEffect(()=>{
      if(indiceTextoActivo === cfg.textos.length+1){
        callbackFin();
        return;
      }
    },[indiceTextoActivo])

  return (
    <>
        <div onClick={mostrarSiguienteTexto} className="pantalla-narrador">
          <p className={`${cfg.textos[indiceTextoActivo].animacion}`}>{cfg.textos[indiceTextoActivo].texto}</p>
          {mostrarTextoDelay && <p className={''}>Click para continuar...</p>}
        </div>
    </>
  );



}

