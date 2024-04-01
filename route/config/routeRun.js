
const usersR = require('../usersRoute');
const foodsR = require('../foodsRoute');
const indexR = require('../indexR');
const cakes = require('../cakesRoute');
const uploadR = require('../uploadRoute');

exports.routeInit = (_app) => {


    _app.use('/' ,indexR);
    _app.use('/users' ,usersR);
    _app.use('/foods' ,foodsR);
    _app.use('/cakes' , cakes);
    _app.use('/upload' , uploadR);

}
