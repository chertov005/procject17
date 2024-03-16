const mongoose = require('mongoose');
const {config} = require('../../secret/config')

mongoose.connect(`mongodb+srv://${config.dbName}:${config.dbPassword}@cluster.w5tvj76.mongodb.net/Store`)
  .then(() => console.log('Connected database Store!'));