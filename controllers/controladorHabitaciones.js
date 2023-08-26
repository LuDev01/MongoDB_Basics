import { ServicioHabitaciones } from "../services/servicioHabitacion.js";

export class ControladorHabitaciones {
    constructor() { }

    async registrarHabitaciones(peticion, respuesta) {
        let datosHabitacion = peticion.body;

        let servicioHabitacion = new ServicioHabitaciones()

        try {
            //si la peticion funiona
            await servicioHabitacion.registrarHabitaciones(datosHabitacion);

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
    async buscarUnaHabitacion(peticion, respuesta) {
        let idHabitacion = peticion.params.idHabitacion;
        let servicioHabitacion = new ServicioHabitaciones()
        try {
            //si la peticion funiona
            respuesta.status(200).json({
                mensaje: "exito buscando habitacion" + idHabitacion,
                habitacion: await servicioHabitacion.buscarHabitacion(idHabitacion)
            });
        } catch (errorPeticion) {
            //si hubo un error en la peticion
            respuesta.status(400).json({
                mensaje: "fallamos" + errorPeticion,
            })
        }
    }

    async buscandoHabitaciones(peticion, respuesta) {
        let servicioHabitacion = new ServicioHabitaciones()

        try {
            respuesta.status(200).json({
                mensaje: "exito buscando todas las habitaciones",
                "habitacion": await servicioHabitacion.buscarTodasHabitaciones()
            });
        } catch (errorPeticion) {
            respuesta.status(400).json({
                mensaje: "fallamos" + errorPeticion,
            })
        }
    }

    async editarHabitaciones(peticion, respuesta) {
        let servicioHabitacion = new ServicioHabitaciones()
        let idHabitacion = peticion.params.idHabitacion;
        let datosNuevosHabitacion = peticion.body;

        try {
            await servicioHabitacion.editarHabitacion(idHabitacion, datosNuevosHabitacion)
            respuesta.status(200).json({
                mensaje: "exito editando habitacion"
            });
        } catch (errorPeticion) {
            respuesta.status(400).json({
                mensaje: "fallamos" + errorPeticion
            });
        }
    }
}