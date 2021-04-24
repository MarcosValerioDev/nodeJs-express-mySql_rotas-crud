const express = require('express');
const app = express();

const indexRota = require('src/rotas/index');
const userRota = require('src/rotas/user');

app.use('/',indexRota);
app.use('/user',userRota);

app.listen(3000);
module.exports = app;