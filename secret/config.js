require('dotenv').config();


exports.config = {
    tokenKey:process.env.PUBLIC_KEY ,
    dbName:process.env.DB_NAME ,
    dbPassword:process.env.DB_PASSWORD
};





