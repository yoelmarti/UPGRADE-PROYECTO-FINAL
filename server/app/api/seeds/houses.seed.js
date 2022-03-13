const mongoose = require('mongoose');
const House = require('../models/house.model');
const dbConnection = require('../../database/connect');

const houses = [
    {
        refh: 1, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    }, 
    {
        refh: 2, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 3, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 4, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 5, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 6, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 7, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 8, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 9, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 10, 
        meters: 450,
        rooms: 6,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 11, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    }, 
    {
        refh: 12, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 13, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 14, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 15, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 16, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa.jpg"
    },
    {
        refh: 17, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 18, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 19, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 20, 
        meters: 450,
        rooms: 6,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 21, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    }, 
    {
        refh: 22, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 23, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 24, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 25, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 26, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 27,
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 28, 
        meters: 215,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 29, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 30, 
        meters: 450,
        rooms: 6,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 31, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    }, 
    {
        refh: 32, 
        meters: 190,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 33, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 34, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 35, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 36, 
        meters: 500,
        rooms: 7,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 37, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 38, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg"
    },
    {
        refh: 39, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 40, 
        meters: 450,
        rooms: 6,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 41, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    }, 
    {
        refh: 42, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 43, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 44, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 45, 
        meters: 300,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa.jpg"
    },
    {
        refh: 46, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 47, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 48, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 49, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 50, 
        meters: 150,
        rooms: 2,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 51,
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    }, 
    {
        refh: 52, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 53, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 54, 
        meters: 295,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 55, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 56, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 57, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 58, 
        meters: 325,
        rooms: 4,
        bathrooms: 3,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 59, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 60, 
        meters: 450,
        rooms: 6,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 61, 
        meters: 180,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    }, 
    {
        refh: 62, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 63, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 64, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 65, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 66, 
        meters: 250,
        rooms: 4,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 67, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 68, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 69, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 70, 
        meters: 250,
        rooms: 3,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 71, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    }, 
    {
        refh: 72, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 73, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 74, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 75, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 76, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 77, 
        meters: 160,
        rooms: 3,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 78, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 79, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 80, 
        meters: 125,
        rooms: 3,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 81, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    }, 
    {
        refh: 82, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 83, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 84, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 85, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 86, 
        meters: 200,
        rooms: 3,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 87, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 88, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 89, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg"
    },
    {
        refh: 90, 
        meters: 150,
        rooms: 3,
        bathrooms: 3,
        availability: false,
        image: "../../../public/casa.jpg"
    },
    {
        refh: 91, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    }, 
    {
        refh: 92, 
        meters: 110,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg"
    },
    {
        refh: 93, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg"
    },
    {
        refh: 94, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 95, 
        meters: 250,
        rooms: 4,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 96, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 97, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 98, 
        meters: 160,
        rooms: 3,
        bathrooms: 3,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 99, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
    {
        refh: 100, 
        meters: 350,
        rooms: 5,
        bathrooms: 3,
        availability: false,
        image: "../../../public/casa.jpg" 
    },
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