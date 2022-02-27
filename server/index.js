const express = require('express');
//Importamos conexión a db y ejecutamos la conexión
const { PORT } = require('./app/database/connect');

const { connect } = require('./app/database/connect');
connect();

const server = express();

server.listen(PORT, () => {
    console.log(`Servidor arrancado en puerto ${PORT}`);
})