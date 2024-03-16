const express = require('express');
const router  = express.Router();
const {UserModel,validUsers, validUsersLogin} = require('../DataBase/model/userModel');
const bcrypt = require('bcrypt');
const {authToken,genToken} = require('../AuthToken/auth.token')

router.get('/' ,authToken, async(req , res) => {

    try {

        let data;

        if(req.tokenData.role === 'admin') {
            
            data = await UserModel.find({})
            return res.status(200) .json(data)
        }

        else {
            return res.status(401) .json({message:'need permission for this route!!'}) 
        }
      
        
    } catch (error) {
        return res.status(500) .json({message:'internal server error ' , error:error})
    }
    
});



router.post('/' , async(req , res) => {
    
    let valid = validUsers(req.body) ;
    if(valid.error) {
        return res.status(400) .json(valid.error.details)
    }



    try {
        
        let data = new UserModel(req.body) ;
        data.password = await bcrypt.hash(data.password , 10);
        await data.save() ;
        return res.status(201) .json(data);


    } catch (error) {
        return res.status(500) .json({message:'internal server error ' , error:error})
        
    }
    
    
}) ;



router.delete('/:id' , async(req , res) => {
    
    try {
        
        let data = await UserModel.deleteOne({_id:req.params.id}) 
        return res.json(data) 


    } catch (error) {
        return res.status(500) .json({message:'internal server error ' , error:error})
        
    }
    
} );


router.put('/:id' ,async(req , res) => {
    
    try {
        
        let data = await UserModel.updateOne({_id:req.params.id} ,req.body) ;
        return res.json(data)

    } catch (error) {
        return res.status(500) .json({message:'internal server error ' , error:error})
        
    }
    
});


router.post('/login' , async(req , res) => {

    let valid = validUsersLogin(req.body) ;
    if(valid.error) {
        return res.status(400) .json(valid.error.details)
    }

    
    try {
        
        let data = await UserModel.findOne({email:req.body.email}) ;
        if(!data) {

            return res.status(401) .json()

        }


        let validPass = await bcrypt.compare(req.body.password , data.password) 
        if(!validPass) {
            return res.status(401) .json({message:'wrong password'})
        }


        let token = genToken(data._id ,data.role)
        return res.json({message:'success login' ,token:token})

    } catch (error) {
        
        return res.status(500) .json({message:'internal server error ' , error:error})
    }
    
});



router.get('/info' ,authToken, async(req , res) => {
    
    try {
        
        let data = await UserModel.findOne({_id:req.tokenData} ,{password:0})
        return res.status(200) .json(data)

    } catch (error) {
        return res.status(500) .json({message:'internal server error ' , error:error})
        
    }

});


module.exports = router ;