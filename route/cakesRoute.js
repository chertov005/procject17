const express = require('express');
const router = express.Router() ;
const {CakesModel,validCakes} = require('../DataBase/model/cakesModel')

router.get('/' ,async(req , res) => {

 


   
//http://127.0.0.1:3000/cakes?page=3
    try {

     res.status(200).json({message:`hello${req.query.you}`})

    } catch (error) {
        
        return res.status(500) .json({message:'internal server error 500'})

    }

});







module.exports = router ;