
const usersR = require('../usersRoute');
const foodsR = require('../foodsRoute')
const indexR = require('../indexR')

exports.routeInit = (_app) => {


    _app.use('/' ,indexR);
    _app.use('/users' ,usersR);
    _app.use('/foods' ,foodsR);

}