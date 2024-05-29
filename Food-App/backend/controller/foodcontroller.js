import { foodModel } from "../model/foodmodel.js";
import fs from 'fs'

//  post food item

const postFood = async (req, res) => {

    try {

        const imageFileName = req.file.filename

        const food = new foodModel({
            userName:req.body.userName,
            description:req.body.description,
            price:req.body.price,
            category:req.body.category,
            image : imageFileName,

        })

        await food.save()
        res.json({
            Success : true,
            Data : food,
            Message : "Image post successfully"
        })
        
    } catch (error) {

        res.json({
            Success : false,
            Error : error.message
        })     
    }
}

// get the all food list

const getFood = async (req,res)=>{
    try {
        const food = await foodModel.find({})
        res.json({
            Success : true,
            Data : food,
            Message : 'Image get Successfully'
        })
    } catch (e) {

        res.json({
            Success: false,
            Error : e.message
        })
        
    }
}

// remove the food item

const deleteFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`upload/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)

        res.json({
            Success : true,
            Data : food,
            Message : "image removed"
        })
    } catch (e) {
        res.json({
            Success : false,
            Error : e.message
        })
        
    }
}

export {
    postFood,
    getFood,
    deleteFood
}

// export default addFood