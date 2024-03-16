const jwt = require('jsonwebtoken');
const{config} =require('../secret/config')

exports.genToken = (_id ,role) => {

    let token = jwt.sign({_id ,role} ,config.tokenKey ,{expiresIn:'60mins'})

    return token

};


exports.authToken = async(req , res, next) => {

    let checkTokenInHeader = req.header('x-api-key') ;
    if(!checkTokenInHeader) {
        return res.status(401) .json({message:'no sent token in header'})
    };

    try {
        
        let decodeToken = jwt.verify(checkTokenInHeader , config.tokenKey)
        req.tokenData = decodeToken

        console.log(req.tokenData)

        next()


    } catch (error) {
        return res.status(401).json({message:'token expired or invalid'})
    }


};
 