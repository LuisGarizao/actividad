import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Inicio } from "./Components/Inicio";
import { Cabecera } from "./Components/Cabecera";
import {Registro} from "./Components/Registro";
import {Admin} from "./Components/Admin";
import { ARRAY_RESERVAS } from "./Components/Lista-Reservas";
import { Reservacion } from "./Components/Reservacion";

function App() {
	const [reservas, setReservas] = useState(ARRAY_RESERVAS);

	const agregarReserva = (nuevaReserva) => {
		setReservas([...reservas, nuevaReserva]);
	};

	const eliminarReserva = (reserva) => {
		const lista = [...reservas];
		const i = reservas.indexOf(reserva);
		lista.splice(i, 1);
		setReservas(lista);
	};

	const editarReserva = (reserva, datos) => {
		reserva.Nombre = datos[0] != "" ? datos[0] : reserva.Nombre;
		reserva.Apellido = datos[1] != "" ? datos[1] : reserva.Apellido;
		reserva.Documento = datos[2] != "" ? datos[2] : reserva.Documento;
		reserva.Habitacion = datos[3] != "" ? datos[3] : reserva.Habitacion;
		reserva.Ocupantes = datos[4] != "" ? datos[4] : reserva.Ocupantes;
	};

	return (
		<>
			<Router>
				<Cabecera/>
				<Routes>
					<Route path="/" element={<Inicio/>} />
					<Route path="/Registro" element={<Registro agregarReserva={agregarReserva} reservas={reservas} />}/>
					<Route path="/Admin" element={<Admin eliminarReserva={eliminarReserva} editarReserva={editarReserva} reservas={reservas}/>}/> 
				</Routes>
			</Router>
		</>
	);
}

export default App;
