const foodModel = require('../models/food.model')
const storageService = require('A:/Zomato/backend/services/storage.service.js')
const likeModel = require('../models/likes.model')
const { v4:uuid } = require('uuid')
const saveModel = require('../models/save.model')

async function createFood(req, res){

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())
    const {name, description} = req.body;
    const foodItem = await foodModel.create({
        name: name,
        video: fileUploadResult.url,
        description: description,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({
        message: "Food is created successfully", 
        food: foodItem
    })
    
    res.send("Food item created") 
}

async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message: "Food items fetched successfully",
        food: foodItems
    })
}

async function likeFood(req, res) {
    const {foodId} = req.body

    const user = req.user

    const isAlreadyLiked = await likeModel.findOne({
        user: user._id,
        food: foodId
    })

    if (isAlreadyLiked) {
        await likeModel.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { likeCount: -1 }
        })

        res.status(200).json({
            message: "Food unliked successfully"
        })
    } 

    const like = await likeModel.create({
        user: user._id,
        food: foodId
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc: { likeCount: 1 }
    })

    res.status(201).json({
        message: "Food liked successfully",
        like: like
    })

}

async function saveFood(req, res) {
    const {foodId} = req.body
    const user = req.user

    const isAlreadySaved = await saveModel.findOne({
        user: user._id,
        food: foodId
    })

    if (isAlreadySaved) {
        await saveModel.deleteOne({
            user: user._id,
            food: foodId
        })
        res.status(200).json({
            message: "Food unsaved successfully"
        })
    }

    const save = await saveModel.create({
        user: user._id,
        food: foodId
    })
    res.status(201).json({
        message: "Food saved successfully",
        save: save
    })
    
}
module.exports = {
    createFood,
    getFoodItems, 
    likeFood,
    saveFood
}