const http = require('http') ;
const path = require('path') ;
const express = require('express');
const app = express() ;
const cors = require('cors');
require('./DataBase/config/mongoose_connect');
const {routeInit} = require('./route/config/routeRun');
require('dotenv').config();


const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
routeInit(app);

let port = process.env.PORT || 3000 ;

server.listen(port ,(err) => {

    if(err) {
        return console.log(err)
    }

    return console.log(`server up , running on port: ${port}`)

});

