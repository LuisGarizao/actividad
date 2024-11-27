import { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Registro from "./Components/Registro";
import Admin from "./Components/Admin";
import { ARRAY_RESERVAS } from "./Components/Lista-Reservas";

function App() {

  const [reservas, setReservas] = useState(ARRAY_RESERVAS)

  const agregarReserva = (nuevaReserva) =>{
    setReservas([...reservas,nuevaReserva]);
  }

	return (
		<>
			<Router>
					<nav>
						<div className="btn-group mt-3">
							<Link to="/Registro" className="btn btn-primary">Registro</Link>
							<Link to="/Admin" className="btn btn-secondary">Administrar</Link>
						</div>
					</nav>
				<Routes>
					<Route path="/Registro" element={<Registro agregarReserva={agregarReserva} reservas={reservas}/>} />
					<Route path="/Admin" element={<Admin reservas={reservas}/>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
