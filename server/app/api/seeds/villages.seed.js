const mongoose = require('mongoose');
const Village = require('../models/village.model');
const dbConnection = require('../../database/connect');

const villages = [
    {
     name: "Kuartango",
     location: {
         region: "País Vasco",
         province: "Álava",
     },
     population: 430,
     contact: {
         phone: 945362600,
         email: "kuartango@kuartango.eus"
     }   
    }, 
    {
        name: "Letur",
        location: {
            region: "Castilla-La Mancha",
            province: "Albacete",
        },
        population: 909,
        contact: {
            phone: 967426222,
            email: "letur@dipualba.es"
        }   
       }, 
       {
        name: "Elche de la Sierra",
        location: {
            region: "Castilla-La Mancha",
            province: "Albacete",
        },
        population: 3600,
        contact: {
            phone: 967410001,
            email: "helikejoven@gmail.com"
        }   
       }, 
       {
        name: "Madrigal de las Altas Torres",
        location: {
            region: "Castilla y León",
            province: "Ávila",
        },
        population: 1395,
        contact: {
            phone: 920320001,
            email: "ayuntamiento@madrigaldelasaltastorres.es"
        }   
       }, 
       {
        name: "Caleruega",
        location: {
            region: "Castilla y León",
            province: "Burgos",
        },
        population: 450,
        contact: {
            phone: 947534005,
            email: "caleruega.burgos@gmail.com"
        }   
       }, 
       {
        name: "Nofuentes",
        location: {
            region: "Castilla y León",
            province: "Burgos",
        },
        population: 102,
        contact: {
            phone: 947308574,
            email: "merindaddecuestaurria@diputaciondeburgos.net"
        }   
       }, 
       {
        name: "Covarrubias",
        location: {
            region: "Castilla y León",
            province: "Burgos",
        },
        population: 541,
        contact: {
            phone: 947406487,
            email: "aytocovarrubias@wanadoo.es"
        }   
       }, 
       {
        name: "Belorado",
        location: {
            region: "Castilla y León",
            province: "Burgos",
        },
        population: 1800,
        contact: {
            phone: 947580226,
            email: "info@belorado.org"
        }   
       }, 
       {
        name: "La Sequera de Haza",
        location: {
            region: "Castilla y León",
            province: "Burgos",
        },
        population: 30,
        contact: {
            phone: 947530701,
            email: "lasequeradehaza@diputaciondeburgos.net"
        }   
       }, 
       {
        name: "Gumiel de Izán",
        location: {
            region: "Castilla y León",
            province: "Burgos",
        },
        population: 548,
        contact: {
            phone: 947544111,
            email: "gumieldeizan@diputaciondeburgos.net"
        }   
       }, 
       {
        name: "Huete",
        location: {
            region: "Castilla-La Mancha",
            province: "Cuenca",
        },
        population: 1950,
        contact: {
            phone: 969371005,
            email: "huetesecretario@hotmail.com"
        }   
       }, 
       {
        name: "Orea",
        location: {
            region: "Castilla-La Mancha",
            province: "Guadalajara",
        },
        population: 200,
        contact: {
            phone: 949836001,
            email: "ayto-orea@ayto-orea.com"
        }   
       }, 
       {
        name: "Sigüenza",
        location: {
            region: "Castilla-La Mancha",
            province: "Guadalajara",
        },
        population: 3400,
        contact: {
            phone: 949390850,
            email: "ayuntamiento@siguenza.es"
        }   
       }, 
       {
        name: "Arbancón",
        location: {
            region: "Castilla-La Mancha",
            province: "Guadalajara",
        },
        population: 150,
        contact: {
            phone: 949855192,
            email: "ayuntamientodearbancon@hotmail.es"
        }   
       }, 
       {
        name: "Mandayona",
        location: {
            region: "Castilla-La Mancha",
            province: "Guadalajara",
        },
        population: 289,
        contact: {
            phone: 949305002,
            email: "felipec@espublico.com"
        }   
       }, 
       {
        name: "Santa Ana la Real",
        location: {
            region: "Andalucía",
            province: "Huelva",
        },
        population: 504,
        contact: {
            phone: 959122335,
            email: "administracion@santaanalareal.es"
        }   
       }, 
       {
        name: "San Vicente de La Sonsierra",
        location: {
            region: "La Rioja",
            province: "La Rioja",
        },
        population: 1030,
        contact: {
            phone: 941334006,
            email: "ayto@sanvicentedelasonsierra.org"
        }   
       }, 
       {
        name: "Nalda",
        location: {
            region: "La Rioja",
            province: "La Rioja",
        },
        population: 1020,
        contact: {
            phone: 941447203,
            email: "ayto@aytonalda.org "
        }   
       }, 
       {
        name: "Santa Colomba de Somoza",
        location: {
            region: "Castilla y León",
            province: "León",
        },
        population: 520,
        contact: {
            phone: 987631193,
            email: "aytostacolomba@live.com"
        }   
       }, 
       {
        name: "Fabero",
        location: {
            region: "Castilla y León",
            province: "León",
        },
        population: 4386,
        contact: {
            phone: 987550211,
            email: "consultas@fabero.org"
        }   
       }, 
       {
        name: "Tolox",
        location: {
            region: "Andalucía",
            province: "Málaga",
        },
        population: 2150,
        contact: {
            phone: 952487097,
            email: "ayuntamiento@tolox.es"
        }   
       }, 
       {
        name: "Benarrabá",
        location: {
            region: "Andalucía",
            province: "Málaga",
        },
        population: 460,
        contact: {
            phone: 952150077,
            email: "info@benarraba.es"
        }   
       }, 
       {
        name: "Genalguacil",
        location: {
            region: "Andalucía",
            province: "Málaga",
        },
        population: 456,
        contact: {
            phone: 952152003,
            email: "genalguacil@sopde.es"
        }   
       }, 
       {
        name: "Los Arcos",
        location: {
            region: "Comunidad Foral de Navarra",
            province: "Navarra",
        },
        population: 1152,
        contact: {
            phone: 948640803,
            email: "cp.losarc@pnte.cfnavarra.es"
        }   
       }, 
       {
        name: "Allo",
        location: {
            region: "Comunidad Foral de Navarra",
            province: "Navarra",
        },
        population: 960,
        contact: {
            phone: 948523012,
            email: "info@villadeallo.org"
        }   
       }, 
       {
        name: "Orísoain",
        location: {
            region: "Comunidad Foral de Navarra",
            province: "Navarra",
        },
        population: 79,
        contact: {
            phone: 948752012,
            email: "orisoain@animsa.es"
        }   
       }, 
       {
        name: "Berbinzana",
        location: {
            region: "Comunidad Foral de Navarra",
            province: "Navarra",
        },
        population: 672,
        contact: {
            phone: 948755034,
            email: "orvetafalla@gmail.com"
        }   
       }, 
       {
        name: "Milagro",
        location: {
            region: "Comunidad Foral de Navarra",
            province: "Navarra",
        },
        population: 3471,
        contact: {
            phone: 948861005,
            email: "ayuntamiento@milagro.es"
        }   
       }, 
       {
        name: "Legarda",
        location: {
            region: "Comunidad Foral de Navarra",
            province: "Navarra",
        },
        population: 125,
        contact: {
            phone: 948344555,
            email: "legarda@animsa.es"
        }   
       }, 
       {
        name: "Paredes de Nava",
        location: {
            region: "Castilla y León",
            province: "Palencia",
        },
        population: 1900,
        contact: {
            phone: 979830049,
            email: "contacto@paredesdenava.org"
        }   
       }, 
       {
        name: "Aldea del Obispo",
        location: {
            region: "Castilla y León",
            province: "Salamanca",
        },
        population: 246,
        contact: {
            phone: 923488302,
            email: "ayto_aldeadelobispo@yahoo.es"
        }   
       }, 
       {
        name: "Sarnago",
        location: {
            region: "Castilla y León",
            province: "Soria",
        },
        population: 3,
        contact: {
            phone: 689232430,
            email: "sarnago@sarnago.com"
        }   
       }, 
       {
        name: "El Burgo de Osma",
        location: {
            region: "Castilla y León",
            province: "Soria",
        },
        population: 5035,
        contact: {
            phone: 975340107,
            email: "intervencion@burgosma.es"
        }   
       }, 
       {
        name: "Langa de Duero",
        location: {
            region: "Castilla y León",
            province: "Soria",
        },
        population: 718,
        contact: {
            phone: 975353001,
            email: "langadeduero@dipsoria.es"
        }   
       }, 
       {
        name: "Arcos de Jalón",
        location: {
            region: "Castilla y León",
            province: "Soria",
        },
        population: 1535,
        contact: {
            phone: 975320007,
            email: "ayuntamiento@arcosdejalon.es"
        }   
       }, 
       {
        name: "Villar del Salz",
        location: {
            region: "Aragón",
            province: "Teruel",
        },
        population: 75,
        contact: {
            phone: 978865925,
            email: "aytovillarsalz@aragob.es"
        }   
       }, 
       {
        name: "Oliete",
        location: {
            region: "Aragón",
            province: "Teruel",
        },
        population: 353,
        contact: {
            phone: 978818001,
            email: "aytoliete@gmail.com"
        }   
       }, 
       {
        name: "Valoria la Buena",
        location: {
            region: "Castilla y León",
            province: "Valladolid",
        },
        population: 630,
        contact: {
            phone: 983502084,
            email: "ayuntamiento@valorialabuena.com"
        }   
       }, 
       {
        name: "Rabanales de Aliste",
        location: {
            region: "Castilla y León",
            province: "Zamora",
        },
        population: 500,
        contact: {
            phone: 980680282,
            email: "administracion@aytorabanales.es"
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