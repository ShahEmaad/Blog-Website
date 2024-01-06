const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const cors = require('cors')

// Env
const dotenv = require('dotenv')
dotenv.config()

// Rest Object
const app = express()

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.get('/',(req,res)=>{
    res.status(200).send({
        "message":"Node Server"
    })
})

// Env Variables
const PORT = process.env.PORT
const DEV_MODE = process.env.DEV_MODE

// Listen
app.listen(PORT,()=>{
    console.log(`Server mode is ${DEV_MODE} listening on port ${PORT}`.bgGreen.yellow)
})