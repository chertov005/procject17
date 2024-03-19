const express = require('express');
const router = express.Router() ;
const {CakesModel,validCakes} = require('../DataBase/model/cakesModel')


//////////////////////////////////////////////////////////////////////////////////////////


router.get('/' , async(req , res) => {

    let perPage = 5;;
    let myFilter = {} 
    let searchExp = new RegExp(req.query.s ,'i')
    if(req.query.s) {
        myFilter = {$or:[{name:searchExp} ,{info:searchExp}]}
    }


    try {
        let data = await CakesModel.find(myFilter) .limit(perPage) .skip(perPage*req.query.page)
        return res.status(200) .json(data)
        
    } catch (error) {
        return res.status(500).json({message:'some there error with server'})
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////



module.exports = router ;