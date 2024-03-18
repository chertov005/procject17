const express = require('express');
const router = express.Router() ;
const {CakesModel,validCakes} = require('../DataBase/model/cakesModel')

// router.get('/' ,async(req , res) => {


// let perPage = req.query.perPage ? req.query.perPage:5;
// let page = req.query.page ? req.query.page-1:0;
// let reverse = req.query.reverse == 'yes' ? 1 : -1 ;

   
// //http://127.0.0.1:3000/cakes/?perPage=5&page=3




//     try {

//         let data = await CakesModel.find({}) .limit(perPage) .skip(perPage*page) .sort({price:-1})
//         return res.status(200).json(data)


//     } catch (error) {
        
//         return res.status(500) .json({message:'internal server error 500'})

//     }

// });


// router.get('/search' , async(req , res) => {

//     //cakes/search?s=vanila
//     try {

//         let s = req.query.s ;
//         let searchExp = new RegExp(s)
    
//         console.log(searchExp)

//         let data = await CakesModel.find({name:searchExp})
//         return res.status(200).json(data)


//     } catch (error) {
        
//         return res.status(500) .json({message:'internal server error 500'})

//     }

// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// router.get('/' , async(req , res) => {

//     //http://127.0.0.1:3000/cakes?perPage=3&page=5
//     let perPage = req.query.perPage ? req.query.perPage : 5;
//     let page = req.query.page ? req.query.page-1 : 0;
//     let myFilter = {} ;
//     let s = req.query.s ;
//     if(s) {
//         let searchExp = new RegExp(s)
//         myFilter = {$or:[{name:searchExp},{info:searchExp}]}
//     }


//     try {

//         let data = await CakesModel.find(myFilter) .limit(perPage) .skip(perPage*page);
//         return res.status(200) .json(data);
        
        
//     } catch (error) {
//         return res.status(500) .json({message:'internal server error 500'})
//     }
    
    
// });






// router.get('/search' , async(req , res) => {
    
//     try {

//         let s = req.query.s
//         let searchExp = new RegExp(s,'i')
        
//         // let data = await CakesModel.find({name:searchExp})
//         let data = await CakesModel.find({$or:[{name:searchExp},{info:searchExp}]})
//         return res.status(200) .json(data);

//     } catch (error) {
//         return res.status(500) .json({message:'internal server error 500'})

//     }


// });
/////////////////////////////////////////////////////////////////////////////////////////////////

// router.get('/' ,async(req , res) => {

//     let perPage = req.query.perPage ?  req.query.perPage : 5 ;
//     let page = req.query.page ? req.query.page-1 : 0
//     let myFilter = {} ;
//     let s = req.query.s ;
//     if(s) {
//         let searchExp = new RegExp(s , 'i') 
//         myFilter = {$or:[{name:searchExp},{info:searchExp}]}
//     }

//     try {
        
//         let data = await CakesModel.find(myFilter) .limit(perPage) .skip(perPage*page) ;
//         return res.status(200).json(data)

//     } catch (error) {
//         return res.status(500).json({message:'there some error with server , try later...'})
//     }

// });


////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/' , async(req , res) => {

    try {

        let data = await CakesModel.find({})
        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json({message:'there was problem with server , try later'})
    }


});








module.exports = router ;