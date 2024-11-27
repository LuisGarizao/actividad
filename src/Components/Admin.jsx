import React, { useState } from "react";
import { Reservacion } from "./Reservacion";
import { ARRAY_RESERVAS } from "./Lista-Reservas";

export const Admin = ({reservas}) => {

	return (
		<>
			<div className="container">
				<div className="row">
					<h1>Administración</h1>
					<div>
						<table className="table">
							<thead>
								<tr>
									<th style={{width: "10%"}} scope="col">#</th>
									<th style={{width: "20%"}} scope="col">Nombre</th>
									<th style={{width: "20%"}} scope="col">Apellido</th>
									<th style={{width: "20%"}} scope="col">Documento</th>
									<th style={{width: "20%"}} scope="col">Tipo Habitacion</th>
									<th style={{width: "10%"}} scope="col">N° Ocupantes</th>
								</tr>
							</thead>
							<tbody>
                                {reservas.map((reserva)=>(
                                    <tr key={reserva.CodigoReserva} className="align-middle">
                                        <td>{reserva.CodigoReserva}</td>
                                        <td>{reserva.Nombre}</td>
                                        <td>{reserva.Apellido}</td>
                                        <td>{reserva.Documento}</td>
                                        <td>{reserva.Habitacion}</td>
                                        <td>{reserva.Ocupantes}</td>
                                    </tr>
                                ))}

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin;
