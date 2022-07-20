import React from "react";
import {Link} from 'react-router-dom'
import useLocalStorage from "use-local-storage";

function Home() {
	
//EL NOMBRE DEL JUGADOR
	const [nombreJ1, setNombreJ1] = React.useState('');
	const [nombreJ2, setNombreJ2] = React.useState('');
	
	limpiaLocalStorage();

	function limpiaLocalStorage(){
		localStorage.clear();
	}

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
					<h1>Pokemon</h1>
					<p>Juego de combate Pokemon para dos jugadores donde todo puede pasar...</p>
				</div>
				<div className="linea-flex-empujarLados">
					<p className="titulo-jugador-home">{`Jugador 1: ${nombreJ1 || ''}`}</p>
					<input 
						type="text" 
						value={nombreJ1}
						onChange={usuario1Teclea}
						placeholder='Nombre ...(opcional)'
					/>
				</div>
				<div className="linea-flex-empujarLados">
					<p className="titulo-jugador-home">{`Jugador 2: ${nombreJ2 || ''}`}</p>
					<input 
						type="text" 
						value={nombreJ2}
						onChange={usuario2Teclea}
						placeholder='Nombre ...(opcional)'
					/>
				</div>
				<Link className='link-boton-jugar' to='/eleccionPokemon'><button className="boton-jugar">Jugar</button></Link>
			</div>
		</>
	);

}

export default Home;
