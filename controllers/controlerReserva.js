import { ServicioReservas } from "../services/servicioReserva.js";

export class ControladorReservas {
    constructor() { }

    async registrarReservas(peticion, respuesta) {
        let datosReserva = peticion.body;

        let servicioReserva = new ServicioReservas()

        try {
            //si la peticion funiona
            await servicioReserva.registrarReservas(datosReserva);

            respuesta.status(200).json({
                mensaje: "Exito agregando habitación: "
            });

        } catch (errorPeticion) {
            //si hubo un error en la peticion
            respuesta.status(400).json({
                mensaje: "fallamos" + errorPeticion,
            });
        }
    }
    async buscarUnaReserva(peticion, respuesta) {
        let idReserva = peticion.params.idReservas;
        let servicioReserva = new ServicioReservas()
        try {
            //si la peticion funiona
            respuesta.status(200).json({
                mensaje: "exito buscando Reserva" + idReserva,
                Reserva: await servicioReserva.buscarReserva(idReserva)
            });
        } catch (errorPeticion) {
            //si hubo un error en la peticion
            respuesta.status(400).json({
                mensaje: "fallamos" + errorPeticion,
            })
        }
    }

    async buscandoReservas(peticion, respuesta) {
        let servicioReserva = new ServicioReservas()
        try {
            respuesta.status(200).json({
                mensaje: "exito buscando todas las Reservas",
                "Reserva": await servicioReserva.buscarTodasReservas()
            });
        } catch (errorPeticion) {
            respuesta.status(400).json({
                mensaje: "fallamos" + errorPeticion,
            })
        }
    }

    async editarReservas(peticion, respuesta) {
        let servicioReserva = new ServicioReservas()
        let idReserva = peticion.params.idReservas;
        let datosNuevosReserva = peticion.body;

        try {
            await servicioReserva.editarReserva(idReserva, datosNuevosReserva)
            respuesta.status(200).json({
                mensaje: "exito editando Reserva"
            });
        } catch (errorPeticion) {
            respuesta.status(400).json({
                mensaje: "fallamos" + errorPeticion
            });
        }
    }
}