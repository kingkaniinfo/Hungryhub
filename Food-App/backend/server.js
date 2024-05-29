import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from './config/connect.js'
import foodRouter from './route/foodRoute.js'

// config dotenv
dotenv.config()

// db coonection
connectDb()

// app config

const app = express()
const port = 4000

// middleware

app.use(express.json())
app.use(cors())

// Api endpoint
app.use('/api/food',foodRouter)

// api endpoint for display image in ui

app.use('/image', express.static('upload'))


app.get('/',(req,res)=>{
    res.send('Node is ready')
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
