import React from "react";
import { useNavigate } from 'react-router-dom'
import logo from '../../imgs/iconos/logo.png'
import { useSelector, useDispatch } from "react-redux";
import { setNombreJ1, setNombreJ2, resetBattle } from "../../redux/Actions";

function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(resetBattle())
	}, [])

	const handleSubmit = () => {
		navigate('/eleccionPokemon')
	}
	return (
		<>
			<div className="page-container home-container">
				<div className="titulo-y-descripcion">
					<img className='logo-home' src={logo} alt='Icono Pokeball'></img>
					<h1>Pokemon</h1>
					<p>Juego de combate Pokemon para dos jugadores donde todo puede pasar...</p>
				</div>

				<form onSubmit={handleSubmit}>
					<p className="titulo-jugador-home">{`Jugador 1: `}</p>
					<input
						type="text"
						value={useSelector(state => state.nombreJ1) || ''}
						onChange={evt => dispatch(setNombreJ1(evt.target.value))}
						placeholder='Nombre ...(opcional)'
					/>


					<p className="titulo-jugador-home">{`Jugador 2: `}</p>
					<input
						type="text"
						value={useSelector(state => state.nombreJ2) || ''}
						onChange={evt => dispatch(setNombreJ2(evt.target.value))}
						placeholder='Nombre ...(opcional)'
					/>
					<button className="boton-jugar">Jugar</button>
				</form>
			</div>
		</>
	);

}

export default Home;
