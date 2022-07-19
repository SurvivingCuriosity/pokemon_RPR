import React from "react";
import { objetos } from "../../static-data/objetos-copy";
export function ObjectPicker(props) {
    const{callback}=props;
    const [mostrandoCategoria, setMostrandoCategoria] = React.useState(0);
    const [objetosElegidos, setObjetosElegidos] = React.useState([
        {tipo:'cura',objeto:''},
        {tipo:'ataque',objeto:''},
        {tipo:'alteraStats',objeto:''},
        {tipo:'modificador',objeto:''},
        {tipo:'portable',objeto:''}
    ]);
    React.useEffect(()=>{
        if(mostrandoCategoria===objetos.length+1){
            setMostrandoCategoria(0)
        }
    },[mostrandoCategoria])
    React.useEffect(()=>{
        console.log(objetosElegidos);
    },[objetosElegidos])

  return (
    <>
        <h2>Elige tus objetos</h2>
        <p>Todos los jugadores pueden elegir un objeto de cada categoria (curación, ataque etc)</p>
        <div className="object-picker">
                <p className="titulos-categorias">
                    {(mostrandoCategoria<objetos.length+1 && mostrandoCategoria!==0) && <button onClick={()=>{setMostrandoCategoria(prev=>{return prev-1})}}>◄</button> || <span></span> }
                    {objetos[mostrandoCategoria].nombreDisplay}
                    {mostrandoCategoria<4 && <button onClick={()=>{setMostrandoCategoria(prev=>{return prev+1})}}>►</button>  || <span></span>}
                </p>
                <p>{objetos[mostrandoCategoria].descripcion}</p>
                <div className="listaObjetos">
                    {objetos[mostrandoCategoria].objetos.map((obj, index)=>{
                        return(
                            <label key={obj.nombre}>
                                <div id={`${obj.nombre},${objetos[mostrandoCategoria].tipo}`} onClick={userClicksObject} className={`tarjeta-objeto ${index===0 && 'object-selected'}`} key={`${mostrandoCategoria}${obj.nombre}`}>
                                    <p>{obj.nombreDisplay}</p>
                                    <p className="descripcion-objeto">{obj.descripcion}</p>
                                </div>
                            </label>
                            
                            
                        )
                    })}
                </div>
                <button onClick={()=>{setMostrandoCategoria(prev=>{return prev+1})}}>OK</button>
            </div>
            <p>Objetos elegidos:</p>
        <div className="preview-elegidos">
            {/*objetosElegidos.map((obj)=>{
                return(
                    <div key={obj.tipo}>
                        <p>{obj.objeto || 'a'}</p>
                    </div>
                )
            })*/}
            
        </div>
    </>
  );
    function userClicksObject(evt){
        let objeto = evt.currentTarget.id.split(',')[0];
        let tipo = evt.currentTarget.id.split(',')[1];

    }
}

