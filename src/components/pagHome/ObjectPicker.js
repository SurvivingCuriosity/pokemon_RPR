import React from "react";
import { getObjetoFromLista } from "../../helpers/funciones";
import { objetos } from "../../static-data/objetos-copy";
export function ObjectPicker(props) {
    const{callback}=props;

    const [mostrandoCategoria, setMostrandoCategoria] = React.useState(0);
/*el orden de los tipos de objetos siempre es
0-objeto defensa
1-objeto ataque
2-objeto alteraStats
3-objeto interactivo
4-objeto portable
    
*/
    const [objetosElegidos, setObjetosElegidos] = React.useState([
            getObjetoFromLista('pocion', 0),
            getObjetoFromLista('pistola', 1),
            getObjetoFromLista('porro', 2),
            getObjetoFromLista('litrona', 3),
            getObjetoFromLista('escudo', 4)
    ]);
    React.useEffect(()=>{
        setObjetosElegidos([
            getObjetoFromLista('pocion', 0),
            getObjetoFromLista('pistola', 1),
            getObjetoFromLista('porro', 2),
            getObjetoFromLista('litrona', 3),
            getObjetoFromLista('escudo', 4)
        ])
        console.log(objetosElegidos);
    },[])
    React.useEffect(()=>{
        if(mostrandoCategoria===objetos.length+1){
            setMostrandoCategoria(0)
        }
    },[mostrandoCategoria])



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
                            <label key={Math.random()*4000}>
                                <div id={`${obj.nombre},${objetos[mostrandoCategoria].tipo}`} onClick={userClicksObject} className={`tarjeta-objeto ${index===0 && 'object-selected'}`} key={Math.random()*4000}>
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
            {objetosElegidos.map((obj,index)=>{
                return(
                    <div onClick={()=>{setMostrandoCategoria(index)}} key={obj.img} className={mostrandoCategoria===index ? 'caja-resalta' : 'caja' }>
                        <img style={{width: `25px`}} src={obj.imagen}></img>
                    </div>
                )
            })}
            
        </div>
    </>
  );
    function userClicksObject(evt){
        let objeto = evt.currentTarget.id.split(',')[0];
        let tipo = evt.currentTarget.id.split(',')[1];
        setObjetosElegidos(prev => {
            return{
                ...prev
            }
        })
    }
}

