const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//Importamos conexión a db y ejecutamos la conexión
const { PORT } = require('./app/database/connect');
const userRouter = require('./app/api/routes/user.routes');
const villageRouter = require('./app/api/routes/village.routes');
const houseRouter = require('./app/api/routes/house.routes');
const councilRouter = require('./app/api/routes/council.routes');
const path = require('path');
const cors = require('cors');
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

//cors
  server.use(cors({
      origin: ['http://localhost:4000','http://localhost:3000'],
      credentials: true
  }))


server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// server.use(bodyParser.json())
// server.use(bodyParser.urlencoded({ extended: true }));

server.set("secretKey", process.env.SECRET_SESSION); 

server.use(logger('dev'));

//enrutado de imágenes
server.use('/public', express.static(path.join(__dirname, 'public')));

//Enrutado
server.use('/users', userRouter);
server.use('/villages', villageRouter);
server.use('/houses', houseRouter);
server.use('/councils', councilRouter);


//Manejador de errores
server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Error inesperado del servidor');
})

server.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})