import React from "react";
import {Link} from 'react-router-dom'
import logo from '../../imgs/iconos/logo.png'
import useLocalStorage from "use-local-storage";

function Home() {
	
//EL NOMBRE DEL JUGADOR
	const [nombreJ1, setNombreJ1] = React.useState('');
	const [nombreJ2, setNombreJ2] = React.useState('');
	const [jugadorJ1LS, setJugadorJ1LS] = useLocalStorage('jugador1','');
	const [jugadorJ2LS, setJugadorJ2LS] = useLocalStorage('jugador2','');
	
	localStorage.clear();


	React.useEffect(()=>{
		setJugadorJ1LS({
			nombre:nombreJ1
		})
		setJugadorJ2LS({
			nombre:nombreJ2
		})
	},[nombreJ1,nombreJ2])

	const usuario1Teclea = (evt) => {
		setNombreJ1(evt.target.value)
	}

	const usuario2Teclea = (evt) => {
		setNombreJ2(evt.target.value)
	}

	return (
		<>
			<div className="page-container home-container">
				<div className="titulo-y-descripcion">
					<img className='logo-home' src={logo}></img>
					<h1>Pokemon</h1>
					<p>Juego de combate Pokemon para dos jugadores donde todo puede pasar...</p>
				</div>
				
					<p className="titulo-jugador-home">{`Jugador 1: `}</p>
					<input 
						type="text" 
						value={nombreJ1}
						onChange={usuario1Teclea}
						placeholder='Nombre ...(opcional)'
					/>
				
				
					<p className="titulo-jugador-home">{`Jugador 2: `}</p>
					<input 
						type="text" 
						value={nombreJ2}
						onChange={usuario2Teclea}
						placeholder='Nombre ...(opcional)'
					/>
				
				<Link className='link-boton-jugar' to='/eleccionPokemon'><button className="boton-jugar">Jugar</button></Link>
			</div>
		</>
	);

}

export default Home;
