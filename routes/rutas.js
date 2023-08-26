import express from "express";
import { ControladorHabitaciones } from "../controllers/controladorHabitaciones.js"
import { ControladorReservas } from "../controllers/controlerReserva.js";

let controladorHabitaciones = new ControladorHabitaciones();
let controladorReservas = new ControladorReservas();
export let rutas = express.Router();

// Rutas habitaciones
rutas.post("/registrarhabitacion", controladorHabitaciones.registrarHabitaciones)
rutas.get("/buscarHabitaciones", controladorHabitaciones.buscandoHabitaciones)
rutas.get("/buscarhabitacion/:idHabitacion", controladorHabitaciones.buscarUnaHabitacion)
rutas.put("/actualizarhabitacion/:idHabitacion", controladorHabitaciones.editarHabitaciones)

// Rutas habitaciones
rutas.post("/registrarReserva", controladorReservas.registrarReservas)
rutas.get("/buscarReservas", controladorReservas.buscandoReservas)
rutas.get("/buscarReservas/:idReservas", controladorReservas.buscarUnaReserva)
rutas.put("/actualizarReservas/:idReservas", controladorReservas.editarReservas)



//http://localhost:3000/buscarHabitaciones