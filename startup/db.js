const mongoose = require('mongoose');
require('dotenv').config();
module.exports = function () {
mongoose.connect(process.env.DB)
 .then( () => console.log('connected to database'))
 .catch(err => console.error(err));
}