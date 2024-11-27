import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

// export const Admin = ({reservas}) => {
export const Admin = ({ reservas, eliminarReserva, editarReserva }) => {
	const [showBorrar, setShowBorrar] = useState(false);
	const [showEditar, setShowEditar] = useState(false);
	const [objReserva, setObjReserva] = useState();

	const [Nombre, setNombre] = useState("");
	const [Apellido, setApellido] = useState("");
	const [Documento, setDocumento] = useState("");
	const [Habitacion, setHabitacion] = useState("");
	const [Ocupantes, setOcupantes] = useState("");

	const borrar = (reserva) => {
		eliminarReserva(reserva);
	};

	const editar = (reserva, datos) => {
		editarReserva(reserva, datos);
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<h1>Administración</h1>
					<div>
						<table className="table">
							<thead>
								<tr>
									<th style={{ width: "5%" }} scope="col">
										#
									</th>
									<th style={{ width: "15%" }} scope="col">
										Nombre
									</th>
									<th style={{ width: "15%" }} scope="col">
										Apellido
									</th>
									<th style={{ width: "20%" }} scope="col">
										Documento
									</th>
									<th style={{ width: "15%" }} scope="col">
										Tipo Habitacion
									</th>
									<th style={{ width: "10%" }} scope="col">
										N° Ocupantes
									</th>
									<th style={{ width: "10%" }}>Editar</th>
									<th style={{ width: "10%" }}>Borrar</th>
								</tr>
							</thead>
							<tbody>
								{reservas.map((reserva) => (
									<tr
										key={reserva.CodigoReserva}
										className="align-middle">
										<td>{reserva.CodigoReserva}</td>
										<td>{reserva.Nombre}</td>
										<td>{reserva.Apellido}</td>
										<td>{reserva.Documento}</td>
										<td>{reserva.Habitacion}</td>
										<td>{reserva.Ocupantes}</td>

										<td>
											<button
												className="btn btn-success"
												onClick={() => {
													setShowEditar(true);
													setObjReserva(reserva);
												}}>
												E
											</button>
										</td>
										<td>
											<button
												className="btn btn-danger"
												onClick={() => {
													setShowBorrar(true);
													setObjReserva(reserva);
												}}>
												B
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						<Modal
							show={showBorrar}
							onHide={() => {
								setShowBorrar(false);
							}}
							backdrop="static">
							<Modal.Header closeButton>
								<Modal.Title>ELIMINAR RESERVACIÓN</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								¿Seguro que desesa eliminar esta reservación?
								{"\n"}
							</Modal.Body>
							<Modal.Footer>
								<Button
									variant="secondary"
									onClick={() => {
										setShowBorrar(false);
									}}>
									Cancelar
								</Button>
								<Button
									variant="danger"
									onClick={() => {
										borrar(objReserva);
										setShowBorrar(false);
									}}>
									Aceptar
								</Button>
							</Modal.Footer>
						</Modal>

						<Modal
							show={showEditar}
							onHide={() => {
								setShowEditar(false);
							}}
							backdrop="static">
							<Modal.Header closeButton>
								<Modal.Title>EDITAR RESERVACIÓN</Modal.Title>
							</Modal.Header>

							<Modal.Body>
								<Form>
									<Form.Label>Nombre</Form.Label>
									<Form.Control
										onChange={(e) => {
											setNombre(e.target.value);
										}}
										value={Nombre}></Form.Control>
									<Form.Label>Apellido</Form.Label>
									<Form.Control
										onChange={(e) => {
											setApellido(e.target.value);
										}}
										value={Apellido}></Form.Control>
									<Form.Label>Documento</Form.Label>
									<Form.Control
										onChange={(e) => {
											setDocumento(e.target.value);
										}}
										value={Documento}></Form.Control>
									<div className="mt-2 mb-2">
										<Form.Label>
											Tipo de Habitacion
										</Form.Label>
										<Form.Check
											type="radio"
											name="tipo_hab"
											label="Regular"
											onChange={(e) => {
												setHabitacion(e.target.value);
											}}
											value={"Regular"}
										/>
										<Form.Check
											type="radio"
											name="tipo_hab"
											label="Premium"
											onChange={(e) => {
												setHabitacion(e.target.value);
											}}
											value={"Premium"}
										/>
									</div>
									<Form.Label>N° de Ocupantes</Form.Label>
									<Form.Select
										onChange={(e) => {
											setOcupantes(e.target.value);
										}}
										value={Ocupantes}>
										<option selected></option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
									</Form.Select>
									<Form></Form>
									<Form></Form>
								</Form>
							</Modal.Body>

							<Modal.Footer>
								<Button
									variant="secondary"
									onClick={() => {
										setShowEditar(false);
									}}>
									Cancelar
								</Button>
								<Button
									variant="success"
									onClick={() => {
										// borrar(objReserva);
										const lista = [
											Nombre,
											Apellido,
											Documento,
											Habitacion,
											Ocupantes,
										];
										editar(objReserva, lista);

										setNombre("");
										setApellido("");
										setDocumento("");
										setHabitacion("");
										setOcupantes("");

										setShowEditar(false);
									}}>
									Aceptar
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin;
