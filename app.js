import express from "express";
import cors from "cors";
import {rutas} from "./routes/rutas.js"
import { establecerConexion } from "./database/conexion.js"

export class App{
 constructor(){
    this.app=express()
    this.conectarDB()
    this.enrutarPeticiones()
 }
 iniciarServidor(){
    this.app.listen(3000, () => console.log("Servidor activo"));
 }
 enrutarPeticiones(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false})); 
    this.app.use("/",rutas);
 }
 conectarDB(){
   establecerConexion()
}
}