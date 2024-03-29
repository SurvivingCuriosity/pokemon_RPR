import React from "react";
import { getObjetoFromLista } from "../../../helpers/funciones";
import { objetos } from "../../../static-data/objetos";
import { useDispatch } from "react-redux";
import { setObjetos } from "../../../redux/Actions";

export function ObjectPicker(props) {
    const dispatch = useDispatch();
    const { pokemonElegido, jugador } = props;

    const [mostrandoCategoria, setMostrandoCategoria] = React.useState(0);
    /*el orden de los tipos de objetos siempre es
        0-objeto defensa
        1-objeto ataque
        2-objeto alteraStats
        3-objeto interactivo
        4-objeto portable
    */

    const [objetoCura, setObjetoCura] = React.useState({});
    const [objetoAtaque, setObjetoAtaque] = React.useState({});
    const [objetoAlteraStats, setObjetoAlteraStats] = React.useState({});
    const [objetoEleccion, setObjetoEleccion] = React.useState({});
    const [objetoPortable, setObjetoPortable] = React.useState({});


    const [objetosElegidos, setObjetosElegidos] = React.useState([objetoCura, objetoAtaque, objetoAlteraStats, objetoEleccion, objetoPortable]);
    const [hayEleccion, sethayEleccion] = React.useState(false);



    React.useEffect(() => {
        if (mostrandoCategoria === objetos.length + 1) {
            setMostrandoCategoria(0)
        }
    }, [mostrandoCategoria])

    React.useEffect(() => {
        setObjetosElegidos([objetoCura, objetoAtaque, objetoAlteraStats, objetoEleccion, objetoPortable])
        if (objetoCura.tipo && objetoAtaque.tipo && objetoAlteraStats.tipo && objetoEleccion.tipo && objetoPortable.tipo) {
            sethayEleccion(true);
        }
    }, [objetoCura, objetoAtaque, objetoAlteraStats, objetoEleccion, objetoPortable])



    return (
        <div className="home-step-box">
            <h3 className={`texto-color-${pokemonElegido.color}`}>Elige tus objetos</h3>
            <div className="object-picker">
                <div className="titulos-categorias">
                    {(mostrandoCategoria < objetos.length + 1 && mostrandoCategoria !== 0) && <button onClick={() => { setMostrandoCategoria(prev => { return prev - 1 }) }}>◄</button>}
                    {objetos[mostrandoCategoria].nombreDisplay}
                    {mostrandoCategoria < 4 && <button onClick={() => { setMostrandoCategoria(prev => { return prev + 1 }) }}>►</button>}
                </div>

                <p className="descripcion-categorias">{objetos[mostrandoCategoria].descripcion}</p>
                <div className="listaObjetos">
                    {objetos[mostrandoCategoria].objetos.map((obj, index) => {
                        return (
                            <div key={Math.random() * 4000}>
                                <div id={`${obj.nombre},${objetos[mostrandoCategoria].tipo}`} onClick={userClicksObject} className={`tarjeta-objeto`} key={Math.random() * 4000}>
                                    <p style={{color:'var(--negro)'}}>{obj.nombreDisplay}</p>
                                    <div className="foto-y-descripcion">
                                        <img alt="Icono de objeto" style={{ width: `1.75em` }} src={obj.imagen}></img>
                                        <p className="descripcion-objeto">{obj.descripcion}</p>
                                    </div>
                                    <p className="cantidad-obj">Cantidad: {obj.usos}</p>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <div className="preview-elegidos">
                    {objetosElegidos.map((obj, index) => {
                        return (
                            <div onClick={() => { setMostrandoCategoria(index) }} key={Math.random() * 4000} className={mostrandoCategoria === index ? `caja-resalta borde-${pokemonElegido.color}` : `caja borde-${pokemonElegido.color}`}>
                                {obj.imagen ? <img alt="Icono de objeto" style={{ width: `25px` }} src={obj.imagen}></img> : 'x'}
                            </div>
                        )
                    })}

                </div>
            </div>
            <button className={`boton-jugar fondo-${pokemonElegido.color}`} onClick={usuarioClicksTerminar} disabled={hayEleccion ? false : true}>{hayEleccion ? 'Terminar' : 'Elige objetos'}</button>
        </div>
    );

    function userClicksObject(evt) {
        let nombreObjeto = evt.currentTarget.id.split(',')[0];
        switch (mostrandoCategoria) {
            case 0:
                setMostrandoCategoria(prev => { return prev + 1 })
                setObjetoCura(getObjetoFromLista(nombreObjeto));
                break;
            case 1:
                setMostrandoCategoria(prev => { return prev + 1 })
                setObjetoAtaque(getObjetoFromLista(nombreObjeto));
                break;
            case 2:
                setMostrandoCategoria(prev => { return prev + 1 })
                setObjetoAlteraStats(getObjetoFromLista(nombreObjeto));
                break;
            case 3:
                setMostrandoCategoria(prev => { return prev + 1 })
                setObjetoEleccion(getObjetoFromLista(nombreObjeto));
                break;
            case 4:
                setObjetoPortable(getObjetoFromLista(nombreObjeto));
                break;
            default:
        }
    }
    function usuarioClicksTerminar() {
        dispatch(setObjetos(jugador, objetosElegidos));
    }
}

