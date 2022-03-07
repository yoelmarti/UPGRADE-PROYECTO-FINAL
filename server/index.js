const express = require('express');
//Importamos conexión a db y ejecutamos la conexión
const { PORT } = require('./app/database/connect');
const userRouter = require('./app/api/routes/user.routes');
const villageRouter = require('./app/api/routes/village.routes');
const houseRouter = require('./app/api/routes/house.routes');
const path = require('path');
const { connect } = require('./app/database/connect');
connect();

const server = express();

//Cabeceras
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Enrutado
server.use('/users', userRouter);
server.use('/villages', villageRouter);
server.use('/houses', houseRouter);


//Manejador de errores
server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Error inesperado del servidor');
})

server.listen(PORT, () => {
    console.log(`Servidor arrancado en puerto ${PORT}`);
})