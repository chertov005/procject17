const mongoose = require('mongoose');
const joi = require('joi');


const schema = new mongoose.Schema({

    user:String,
    email:String,
    password:String,
    role:{type:String , default:'user'} ,
    date_created:{type:Date , default:Date.now()} 

});


exports.UserModel = mongoose.model('users' , schema);


exports.validUsers = (req_body) => {

    let joiSchema = joi.object({

        user: joi.string().min(2) .max(9999) .required() ,
        email: joi.string().min(2) .max(9999) .email() .required() ,
        password: joi.string().min(5) .max(9999) .required() ,


    })

    return joiSchema.validate(req_body);


};


exports.validUsersLogin = (req_body) => {

    let joiSchema = joi.object({

        email: joi.string().min(2) .max(9999) .email() .required() ,
        password: joi.string().min(5) .max(9999) .required() ,


    })

    return joiSchema.validate(req_body);


};