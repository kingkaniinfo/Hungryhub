import express from 'express'
import { 
    postFood,
    getFood,
    deleteFood

 } from '../controller/foodcontroller.js'
import multer from 'multer'

const foodRouter = express.Router()

//Image store Engin

const storage = multer.diskStorage({
    destination : "upload",
    filename : (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage : storage})

const singleUpload = upload.single("image")

// route path

foodRouter.post('/postFood', singleUpload, postFood)
foodRouter.get('/getFood', getFood)
foodRouter.post('/deleteFood', deleteFood)


export default foodRouter