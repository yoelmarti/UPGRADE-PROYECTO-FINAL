const mongoose = require('mongoose');
const Village = require('../models/village.model');
const dbConnection = require('../../database/connect');

const villages = [
    {
     name: "Pueblo1",
     location: {
         region: "Castilla y León",
         province: "Zamora",
     },
     population: 1000,
     contact: {
         phone: 666666666,
         email: "pueblo1@gmail.com"
     }   
    }, 
    {
        name: "Pueblo2",
        location: {
            region: "Andalucía",
            province: "Almería",
        },
        population: 300,
        contact: {
            phone: 666666665,
            email: "pueblo2@gmail.com"
        }   
       },   
];

const villagesDocuments = villages.map(village => new Village(village));

mongoose.connect(dbConnection.MONGO_DB,   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(async () => {
        const allVillages = await Village.find();
        if (allVillages.length > 0) {
            await Village.collection.drop();
        }
    })
    .catch((error) => console.error('Error eliminando colección villages:', error))
    .then(async () => {
        await Village.insertMany(villagesDocuments)
    })
    .catch((error) => console.error('Error al insertar en villages:', error))

    .finally(() => mongoose.disconnect());