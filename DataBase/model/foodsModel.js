const mongoose = require('mongoose');
const joi = require('joi') ;



const schema = new mongoose.Schema({

    food:String ,
    price:Number,
    caloris:Number,
    img:String ,
    user_id:String

});


exports.FoodsModel = mongoose.model('foods' , schema) ;


 exports.validFoods = (req_body) => {

    let joiSchema = joi.object({

        food:joi.string().min(2).max(9999).required () ,
        price:joi.number().min(2).max(9999).required () ,
        caloris:joi.number().min(2).max(9999).required () ,
        img:joi.string().min(2).max(9999).allow(null,'') ,

    });

    return joiSchema.validate(req_body)


};