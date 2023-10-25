const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
//conexion a vases de datos mongo 
dotenv.config({
    path: './config/db.js'
})

connectDB()


//crear el servidor express

const app= express()

app.listen(process.env.PORT, () => {
    console.log(`servidor ejecutando en puerto: ${process.env.PORT}`)
})