import express from "express"
import category from '../models/categoriesModel'

const router = express.Router()

router.get("/" , async (req , res)=>{
    const categories = await category.find({})
    res.send(categories)
})

export default router
