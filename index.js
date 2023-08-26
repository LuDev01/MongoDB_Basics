import * as dotenv from 'dotenv'

dotenv.config()
import {App} from "./app.js"; //Imortamos la clase 

let servidor = new App(); //Instanciamos la clase

servidor.iniciarServidor(); //Inicializar servidor
servidor.conectarDB();