import mongoose from 'mongoose';

export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log("Conexión Exitosa")
    }catch(error){
        console.log("Falló la conexión "+error)

    }
}