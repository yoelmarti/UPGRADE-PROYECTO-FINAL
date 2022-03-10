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
     },
    image: "../../../public/kuartango.webp",
    houses: [ { _id: "6224855f48bd96216ef47341" }, { _id: "6224855f48bd96216ef47342" }]    
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
        },
        image: "../../../public/letur.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8c1" }, { _id: "622665dc112f8dcb25fab8c2" },  { _id: "622665dc112f8dcb25fab8c3" }, { _id: "622665dc112f8dcb25fab918" }, { _id: "622665dc112f8dcb25fab919" } ]   
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
        },
        image: "../../../public/elche-de-la-sierra.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8c7" }, { _id: "622665dc112f8dcb25fab8c8" },  { _id: "622665dc112f8dcb25fab8c9" } ]    
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
        },
        image: "../../../public/madrigal-de-las-altas-torres.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8cc" }, { _id: "622665dc112f8dcb25fab915" }, { _id: "622665dc112f8dcb25fab916" },  { _id: "622665dc112f8dcb25fab917" } ]   
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
        },

        image: "../../../public/caleruega.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8c4" }, { _id: "622665dc112f8dcb25fab8c5" } ]
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
        },
        image: "../../../public/images/nofuentes.webp",   
        houses: [ { _id: "622665dc112f8dcb25fab8c6" } ]
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
        },

        image: "../../../public/covarrubias.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8ca" }, { _id: "622665dc112f8dcb25fab8cb" } ] 
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
        },
        image: "../../../public/belorado.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8cd" }, { _id: "622665dc112f8dcb25fab8ce" },  { _id: "622665dc112f8dcb25fab8cf" }, { _id: "622665dc112f8dcb25fab920" } ] 
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
        },
        image: "../../../public/la-sequera-de-haza.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8d0" }, { _id: "622665dc112f8dcb25fab8d1" } ]   
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
        },
        image: "../../../public/gumiel-de-izan.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8d6" }, { _id: "622665dc112f8dcb25fab8d7" } ]
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
        },
        image: "../../../public/huete.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8d3" }, { _id: "622665dc112f8dcb25fab8d4" },  { _id: "622665dc112f8dcb25fab8d5" }, { _id: "622665dc112f8dcb25fab912" }, { _id: "622665dc112f8dcb25fab913" }  ]
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
        },
        image: "../../../public/orea.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8d9" }, { _id: "622665dc112f8dcb25fab8da" },  { _id: "622665dc112f8dcb25fab8db" } ]    
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
        },
        image: "../../../public/siguenza.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8dc" }, { _id: "622665dc112f8dcb25fab8dd" }, { _id: "622665dc112f8dcb25fab91e" }, { _id: "622665dc112f8dcb25fab91f" } ]
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
        },
        image: "../../../public/arbancon.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8d2" } ]
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
        },
        image: "../../../public/mandayona.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8d8" } ]
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
        },
        image: "../../../public/santa-ana-la-real.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8df" }, { _id: "622665dc112f8dcb25fab8e0" },  { _id: "622665dc112f8dcb25fab8e1" } ]
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
        },
        image: "../../../public/san-vicente-de-la-sonsierra.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8de" } ]
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
        },
        image: "../../../public/nalda.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8e2" }, { _id: "622665dc112f8dcb25fab8e3" } ]        

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
        },
        image: "../../../public/santa-colomba-de-somoza.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8e4" } ]
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
        },
        image: "../../../public/fabero.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8e5" }, { _id: "622665dc112f8dcb25fab8e6" },  { _id: "622665dc112f8dcb25fab8e7" }, { _id: "622665dc112f8dcb25fab90f" }, { _id: "622665dc112f8dcb25fab910" },  { _id: "622665dc112f8dcb25fab911" }  ]
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
        },
        image: "../../../public/tolox.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8e8" }, { _id: "622665dc112f8dcb25fab8e9" } ]
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
        },
        image: "../../../public/benarraba.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8ea" } ]
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
        },
        image: "../../../public/genalguacil.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8eb" }, { _id: "622665dc112f8dcb25fab8ec" },  { _id: "622665dc112f8dcb25fab8ed" } ]
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
        },
        image: "../../../public/los-arcos.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8ee" }, { _id: "622665dc112f8dcb25fab8ef" } ]
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
        },
        image: "../../../public/allo.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8f0" } ]
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
            email: "orisoain@animsa.es",
        },
        image: "../../../public/orisoain.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8f1" }, { _id: "622665dc112f8dcb25fab8f2" },  { _id: "622665dc112f8dcb25fab8f3" }, { _id: "622665dc112f8dcb25fab921" }, { _id: "622665dc112f8dcb25fab922" },  { _id: "622665dc112f8dcb25fab923" } ]
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
        },
        image: "../../../public/berbinzana.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8f4" }, { _id: "622665dc112f8dcb25fab8f5" } ]
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
        },
        image: "../../../public/milagro.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8f6" } ]
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
        },
        image: "../../../public/legarda.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8f7" }, { _id: "622665dc112f8dcb25fab8f8" },  { _id: "622665dc112f8dcb25fab8f9" } ]
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
        },

        image: "../../../public/paredes-de-nava.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8fa" }, { _id: "622665dc112f8dcb25fab8fb" } ]
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
        },
        image: "../../../public/aldea-del-obispo.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8fc" } ]
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
        },
        image: "../../../public/arbancon.webp",
        houses: [ { _id: "622665dc112f8dcb25fab8fd" }, { _id: "622665dc112f8dcb25fab8fe" },  { _id: "622665dc112f8dcb25fab8ff" } ]
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
        },
        image: "../../../public/el-burgo-de-osma.webp",
        houses: [ { _id: "622665dc112f8dcb25fab900" }, { _id: "622665dc112f8dcb25fab901" } ]
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
        },
        image: "../../../public/langa-de-duero.webp",
        houses: [ { _id: "622665dc112f8dcb25fab902" } ]
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
        },
        image: "../../../public/arcos-de-jalon.webp",
        houses: [ { _id: "622665dc112f8dcb25fab903" }, { _id: "622665dc112f8dcb25fab904" },  { _id: "622665dc112f8dcb25fab905" } ]
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
        },
        image: "../../../public/villar-del-salz.webp",
        houses: [ { _id: "622665dc112f8dcb25fab906" }, { _id: "622665dc112f8dcb25fab907" }, { _id: "622665dc112f8dcb25fab914" }  ]
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
        },
        image: "../../../public/oliete.webp",
        houses: [ { _id: "622665dc112f8dcb25fab908" }, { _id: "622665dc112f8dcb25fab91a" }  ]
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
        },
        image: "../../../public/valoria-la-buena.webp",
        houses: [ { _id: "622665dc112f8dcb25fab909" }, { _id: "622665dc112f8dcb25fab90a" },  { _id: "622665dc112f8dcb25fab90b" }, { _id: "622665dc112f8dcb25fab90e" } ]
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
        },

        image: "../../../public/rabanales-de-aliste.webp",
        houses: [ { _id: "622665dc112f8dcb25fab90c" }, { _id: "622665dc112f8dcb25fab90d" }, { _id: "622665dc112f8dcb25fab924" }, { _id: "622665dc112f8dcb25fab91b" }, { _id: "622665dc112f8dcb25fab91c" },  { _id: "622665dc112f8dcb25fab91d" } ]
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