const express = require('express');
const app = express();
require('./startup/cors')(app);
require('./startup/routes')(app);  
require('./startup/db')();

const _port = process.env.PORT || 5000;
app.listen(_port, () => console.log(`runnin at port ${_port}`));