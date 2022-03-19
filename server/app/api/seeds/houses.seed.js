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
        image: "../../../public/casa1.avif" 
    }, 
    {
        refh: 2, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa2.avif" 
    },
    {
        refh: 3, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa3.avif" 
    },
    {
        refh: 4, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa4.avif" 
    },
    {
        refh: 5, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa5.avif" 
    },
    {
        refh: 6, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa6.avif" 
    },
    {
        refh: 7, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa7.avif" 
    },
    {
        refh: 8, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa8.avif" 
    },
    {
        refh: 9, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa9.avif" 
    },
    {
        refh: 10, 
        meters: 450,
        rooms: 6,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa10.avif" 
    },
    {
        refh: 11, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa11.avif" 
    }, 
    {
        refh: 12, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa12.avif" 
    },
    {
        refh: 13, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa13.avif" 
    },
    {
        refh: 14, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa14.avif" 
    },
    {
        refh: 15, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa15.avif" 
    },
    {
        refh: 16, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa16.avif"
    },
    {
        refh: 17, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa17.avif" 
    },
    {
        refh: 18, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa18.avif" 
    },
    {
        refh: 19, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa19.avif" 
    },
    {
        refh: 20, 
        meters: 450,
        rooms: 6,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa20.avif" 
    },
    {
        refh: 21, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa21.avif" 
    }, 
    {
        refh: 22, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa22.avif" 
    },
    {
        refh: 23, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa23.avif" 
    },
    {
        refh: 24, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa24.avif" 
    },
    {
        refh: 25, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa25.avif" 
    },
    {
        refh: 26, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa26.avif" 
    },
    {
        refh: 27,
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa27.avif" 
    },
    {
        refh: 28, 
        meters: 215,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa28.avif" 
    },
    {
        refh: 29, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa29.avif" 
    },
    {
        refh: 30, 
        meters: 450,
        rooms: 6,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa30.avif" 
    },
    {
        refh: 31, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa31.avif" 
    }, 
    {
        refh: 32, 
        meters: 190,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa32.avif" 
    },
    {
        refh: 33, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa33.avif" 
    },
    {
        refh: 34, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa34.avif" 
    },
    {
        refh: 35, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa35.avif" 
    },
    {
        refh: 36, 
        meters: 500,
        rooms: 7,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa36.avif" 
    },
    {
        refh: 37, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa37.avif" 
    },
    {
        refh: 38, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa38.avif"
    },
    {
        refh: 39, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa39.avif" 
    },
    {
        refh: 40, 
        meters: 450,
        rooms: 6,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa40.avif" 
    },
    {
        refh: 41, 
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa41.avif" 
    }, 
    {
        refh: 42, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa42.avif" 
    },
    {
        refh: 43, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa43.avif" 
    },
    {
        refh: 44, 
        meters: 95,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa44.avif" 
    },
    {
        refh: 45, 
        meters: 300,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa45.avif"
    },
    {
        refh: 46, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa46.avif" 
    },
    {
        refh: 47, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa47.avif" 
    },
    {
        refh: 48, 
        meters: 90,
        rooms: 2,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa48.avif" 
    },
    {
        refh: 49, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa49.avif" 
    },
    {
        refh: 50, 
        meters: 150,
        rooms: 2,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa50.avif" 
    },
    {
        refh: 51,
        meters: 120,
        rooms: 3,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa51.avif" 
    }, 
    {
        refh: 52, 
        meters: 90,
        rooms: 2,
        bathrooms: 1,
        availability: false,
        image: "../../../public/casa52.avif" 
    },
    {
        refh: 53, 
        meters: 150,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa53.avif" 
    },
    {
        refh: 54, 
        meters: 295,
        rooms: 4,
        bathrooms: 2,
        availability: true,
        image: "../../../public/casa54.avif" 
    },
    {
        refh: 55, 
        meters: 350,
        rooms: 5,
        bathrooms: 4,
        availability: false,
        image: "../../../public/casa55.avif" 
    },
    {
        refh: 56, 
        meters: 500,
        rooms: 6,
        bathrooms: 3,
        availability: true,
        image: "../../../public/casa56.avif" 
    },
    {
        refh: 57, 
        meters: 60,
        rooms: 2,
        bathrooms: 1,
        availability: true,
        image: "../../../public/casa57.avif" 
    },
    {
        refh: 58, 
        meters: 325,
        rooms: 4,
        bathrooms: 3,
        availability: false,
        image: "../../../public/casa58.avif" 
    },
    {
        refh: 59, 
        meters: 190,
        rooms: 4,
        bathrooms: 2,
        availability: false,
        image: "../../../public/casa59.avif" 
    },
    {
        refh: 60, 
        meters: 450,
        rooms: 6,
        bathrooms: 4,
        availability: true,
        image: "../../../public/casa60.avif" 
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