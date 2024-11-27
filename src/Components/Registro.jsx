import React, { useState } from "react";
import { ARRAY_RESERVAS } from "./Lista-Reservas";
import { Reservacion } from "./Reservacion";

export const Registro = ({ agregarReserva, reservas }) => {
	const [Nombre, setNombre] = useState("");
	const [Apellido, setApellido] = useState("");
	const [Documento, setDocumento] = useState("");
	const [Habitacion, setHabitacion] = useState("");
	const [Ocupantes, setOcupantes] = useState("");

	const manejarSubmit = (e) => {
		e.preventDefault();
		const nuevoCod = reservas[reservas.length - 1].CodigoReserva + 1;

		const nuevaReserva = new Reservacion(
			nuevoCod,
			Nombre,
			Apellido,
			Documento,
			Habitacion,
			Ocupantes
		);
		agregarReserva(nuevaReserva);
		setNombre("");
		setApellido("");
		setDocumento("");
		setHabitacion("");
		setOcupantes("");
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-8" >
						<h1>Reserva de lugares</h1>
						<form onSubmit={manejarSubmit}>
							<div className="row">
								<div className="col-sm-8 ">
									<label for="" className="form-label mt-3">
										Nombre
									</label>
									<input
										type="text"
										className="form-control col-sm-6 rounded-1"
										onChange={(e) => {
											setNombre(e.target.value);
										}}
										value={Nombre}
										required
									/>
								</div>
							</div>

							<div className="row">
								<div className="col-sm-8 ">
									<label for="" className="form-label mt-3">
										Apellido
									</label>
									<input
										type="text"
										className="rounded-1 form-control"
										onChange={(e) => {
											setApellido(e.target.value);
										}}
										value={Apellido}
										required
									/>
								</div>
							</div>

							<div className="row">
								<div className="col-sm-8 ">
									<label for="" className="form-label mt-3">
										N° Documento
									</label>
									<input
										type="text"
										className="rounded-1 form-control"
										onChange={(e) => {
											setDocumento(e.target.value);
										}}
										value={Documento}
										required
									/>
								</div>
							</div>

							<div className="row">
								<div className="mt-3">
									<label for="">Tipo de habitación</label>
									<div class="form-check m-1">
										<input
											className="form-check-input"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault1"
											onChange={(e) => {
												setHabitacion(e.target.value);
											}}
											value={"Regular"}
											required
										/>
										<label
											className="form-check-label"
											for="flexRadioDefault1">
											Regular
										</label>
									</div>
									<div class="form-check m-1">
										<input
											className="form-check-input"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault2"
											onChange={(e) => {
												setHabitacion(e.target.value);
											}}
											value={"Premium"}
											required
										/>
										<label
											className="form-check-label"
											for="flexRadioDefault2">
											Premium
										</label>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="mt-3 col-sm-8">
									<label for="">Numero de ocupantes</label>
									<select
										className="form-select"
										aria-label="Default select example"
										onChange={(e) => {
											setOcupantes(e.target.value);
										}}
										value={Ocupantes}
										required>
										<option selected></option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
									</select>
								</div>
							</div>

							<button
								type="submit"
								className="btn btn-primary mt-3">
								Confirmar
							</button>
						</form>
					</div>

					<div className="col-md-4">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Registro;
