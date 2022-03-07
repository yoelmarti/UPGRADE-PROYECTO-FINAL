const mongoose = require('mongoose');
const House = require('../models/house.model');
const dbConnection = require('../../database/connect');

const houses = [
    {
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
    }, 
    {
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
    }
];

const housesDocuments = houses.map(house => new House(house));

mongoose.connect(dbConnection.MONGO_DB,   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(async () => {
        const allHouses = await House.find();
        if (allHouses.length > 0) {
            await House.collection.drop();
        }
    })
    .catch((error) => console.error('Error eliminando colección houses:', error))
    .then(async () => {
        await House.insertMany(housesDocuments)
    })
    .catch((error) => console.error('Error al insertar en houses:', error))

    .finally(() => mongoose.disconnect());