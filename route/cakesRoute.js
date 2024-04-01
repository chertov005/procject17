const express = require('express');
const router = express.Router() ;
const {CakesModel,validCakes} = require('../DataBase/model/cakesModel')


//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////////



router.get('/' , async(req , res) => {

    let myFilter = {}
    let eXep = new RegExp(req.query.s ,'i')
    if(req.query.s) {
        myFilter = {$or:[{name:eXep},{info:eXep}]}
    }

    try {

        let perPage = 5 ;
        let page = req.query.page-1 ;

        let data = await CakesModel.find(myFilter)  .limit(perPage) .skip(perPage*page) ;
        return res.status(200) .json(data) 

        
    } catch (error) {
        return res.status(500).json({message:'there was error with server  , try later...'})
    }

});



/////////////////////////////////////////////////////////////////







module.exports = router ;