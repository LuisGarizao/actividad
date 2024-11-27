import { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Registro from "./Components/Registro";
import Admin from "./Components/Admin";

function App() {
	return (
		<>
			{/* <div>
      <h1>Pagina de inicio</h1>
      <hr />
    </div> */}
			<Router>
					<nav>
						<div className="btn-group mt-3">
							<Link to="/Registro" className="btn btn-primary">Registro</Link>
							<Link to="/Admin" className="btn btn-secondary">Administrar</Link>
						</div>
					</nav>
				<Routes>
					<Route path="/Registro" element={<Registro />} />
					<Route path="/Admin" element={<Admin />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
