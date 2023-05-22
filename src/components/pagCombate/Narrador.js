import React from "react";

export function Narrador(props) {
//VARIABLES
  const {cfg, narradorTrabajando=true, callbackFin} = props

  const [indiceTextoActivo, setIndiceTextoActivo] = React.useState(0);
  const [mostrarTextoDelay, setMostrarTextoDelay] = React.useState(false);

    const mostrarSiguienteTexto = () => {
      setMostrarTextoDelay(false);
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
      
      const timeout = window.setTimeout(()=>{
        setMostrarTextoDelay(true);
      },5000)

      return () => {
        clearTimeout(timeout);
      }
    },[])

    React.useEffect(()=>{
      if(indiceTextoActivo === cfg.textos.length+1){
        callbackFin();
        return;
      }
    },[indiceTextoActivo, cfg])

  return (
    <>
        <div onClick={mostrarSiguienteTexto} className="pantalla-narrador">
          <p className={`${cfg?.textos[indiceTextoActivo]?.animacion || ''} `}>{cfg?.textos[indiceTextoActivo]?.texto || ''}</p>
          {narradorTrabajando && mostrarTextoDelay && <p className={'animacion-parpadeo'}>Click para continuar...</p>}
        </div>
    </>
  );



}

