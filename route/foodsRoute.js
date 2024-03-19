const express = require('express');
const router = express.Router();
const {authToken} = require('../AuthToken/auth.token')
const {FoodsModel,validFoods} = require('../DataBase/model/foodsModel')


router.get('/' ,authToken, async(req , res) => {

    let perPage = 20 ;
    let page = req.query.page-1 ;
    let myFilter = {} ;
    if(req.query.s) {
        
        let sExp = new RegExp(req.query.s ,'i') 
        myFilter = {$or:[{food:sExp} ,{price:sExp}]}
    }

    try {
        
        let data;
        if(req.tokenData.role === 'admin') {
            data = await FoodsModel.find({myFilter}) .limit(perPage) .skip(perPage*page)
            return res.status(200) .json(data)
        }
        
        else {
            data = await FoodsModel.find({user_id:req.tokenData._id})
            return res.status(200) .json(data)
        }

    } catch (error) {
        return res.status(500) .json({message:'internal server error' , error:error})
    }
    

});


router.post('/' ,authToken, async(req ,res) => {
    
    let valid = validFoods(req.body) 
    if(valid.error) {
        return res.status(400) .json(valid.error.details)
    }

    try {
        
        let data = new FoodsModel(req.body); 
        data.user_id = req.tokenData._id ;
        await data.save();
        return res.status(201).json(data);



    } catch (error) {
        return res.status(500) .json({message:'internal server error' , error:error});
        
    }
    
});


router.delete('/:id' ,authToken,async(req ,res) => {
    
    try {
        let data;

        if(req.tokenData.role === 'admin') {
            data = await FoodsModel.deleteOne({_id:req.params.id}) 
            return res.json(data)
        }


        else{

            data = await FoodsModel.deleteOne({_id:req.params.id ,user_id:req.tokenData._id})
            return res.json(data)
        }



    } catch (error) {
        return res.status(500) .json({message:'internal server error' , error:error});
        
    }
    
});



router.put("/:id" ,authToken, async(req , res) => {
    
    let valid = validFoods(req.body) 
    if(valid.error) {
        return res.status(400) .json(valid.error.details)
    }
  
    

    try {
        
        let data ;
        if(req.tokenData.role === 'admin') {

            data = await FoodsModel.updateOne({_id:req.params.id} , req.body) 
            return res.json(data)

        }

        else{
            data = await FoodsModel.updateOne({_id:req.params.id , user_id:req.tokenData._id}) 
            return res.json(data)
        }



    } catch (error) {
        
        return res.status(500) .json({message:'internal server error' , error:error});
    }



});


module.exports = router ;