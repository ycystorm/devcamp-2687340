const mongoose = require('mongoose')
const colors = require('colors')
//funcion de conexion base de datos  mongo


//traer variables de entorno 
//del /config/ .env



 const  connectDB = async () =>{
    //crear un pnjeto de conexion 
    const conn =  await mongoose.connect( process.env.MONGO_URL)
    console.log(`mongodb conectado en el hots: ${ conn.connection.host } `)
}

module.exports = connectDB
