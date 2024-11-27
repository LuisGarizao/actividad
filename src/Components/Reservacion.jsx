export class Reservacion{
    CodigoReserva
    Nombre
    Apellido
    Documento
    Habitacion
    Ocupantes 

    constructor(cod,nom,ape,doc,hab,ocs){
        this.CodigoReserva=cod
        this.Nombre=nom
        this.Apellido=ape
        this.Documento=doc
        this.Habitacion=hab
        this.Ocupantes=ocs
    }
}