import { NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import {logo} from ""

export const Cabecera = () => {
	return (
		<>
			<div>
				<nav
					className="navbar navbar-expand-lg bg-dark"
					data-bs-theme="dark">
					<div className="container-fluid">
						<NavLink className="navbar-brand" to="/">
							<img src={"../Assets/scrn.png"} alt="Inicio" />
						</NavLink>

			        
						<div className="navbar-nav me-auto mb-2 mb-lg-0">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<NavLink
										to="/Registro"
										className="nav-link">
										Registro
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/Admin" className="nav-link">
										Administrar
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Cabecera;
