import { modeloReserva } from "../models/modeloReserva.js";

export class ServicioReservas {
    constructor() { }

    async registrarReservas(datosReserva) {
        let ReservaNueva = new modeloReserva(datosReserva)
        return await ReservaNueva.save()
    }
    async buscarTodasReservas() {
        let ReservasConsultadas = await modeloReserva.find()
        return ReservasConsultadas
    }
    async buscarReserva(idReserva) {
        let ReservaConsultada = await modeloReserva.findById(idReserva)
        return ReservaConsultada
    }
    async editarReserva(idReserva, datosReserva) {
        return await modeloReserva.findByIdAndUpdate(idReserva, datosReserva)
    }
}