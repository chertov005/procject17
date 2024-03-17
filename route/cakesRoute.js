const express = require('express');
const router = express.Router() ;
const {CakesModel,validCakes} = require('../DataBase/model/cakesModel')

router.get('/' ,async(req , res) => {

 


   
//http://127.0.0.1:3000/cakes?page=3



let perPage = 2
let page = req.query.page-1


    try {

    let data = await CakesModel.find({}) .limit(perPage) .skip(page*perPage);
    return res.json(data)

    } catch (error) {
        
        return res.status(500) .json({message:'internal server error 500'})

    }

});







module.exports = router ;