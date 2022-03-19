const mongoose = require('mongoose');
const Village = require('../models/village.model');
const dbConnection = require('../../database/connect');

const villages = [
    {
     refv: 1, 
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
    houses: ["6235aff3123202cbbb5b534d", "6235aff3123202cbbb5b5365" ]    

    }, 
    {
        refv: 2, 
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
        houses: ["6235aff3123202cbbb5b5353"] 
       }, 
       {
        refv: 3, 
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
        houses: [ "6235aff3123202cbbb5b5349" ] 
       }, 
       {
        refv: 4, 
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
        houses: ["6235aff3123202cbbb5b5348"]   
       }, 
       {
        refv: 5, 
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
        houses: [ "6235aff3123202cbbb5b5343" ]
       }, 
       {
        refv: 6, 
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
        image: "../../../public/nofuentes.webp",   
        houses: [ "6235aff3123202cbbb5b5344" ]
       }, 
       {
        refv: 7, 
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
        houses: [ "6235aff3123202cbbb5b535f"] 
       }, 
       {
        refv: 8, 
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
        houses: [ "6235aff3123202cbbb5b5367" ] 
       }, 
       {
        refv: 9, 
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
        image: "../../../public/la_sequera_de_haza.webp",
        houses: [ "6235aff3123202cbbb5b5373" ]   
       }, 
       {
        refv: 10, 
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
        houses: [ "6235aff3123202cbbb5b5372" ]
       }, 
       {
        refv: 11, 
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
        houses: [ "6235aff3123202cbbb5b536c", "6235aff3123202cbbb5b5369", "6235aff3123202cbbb5b534f"]
       }, 
       {
        refv: 12, 
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
        houses: ["6235aff3123202cbbb5b5352" ]    
       }, 
       {
        refv: 13, 
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
        houses: [ "6235aff3123202cbbb5b5375" ]
       }, 
       {
        refv: 14, 
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
        houses: [ "6235aff3123202cbbb5b536f" ]
       }, 
       {
        refv: 15, 
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
        houses: [ "6235aff3123202cbbb5b536e"  ]
       }, 
       {
        refv: 16, 
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
        houses: [ "6235aff3123202cbbb5b5368"]
       }, 
       {
        refv: 17, 
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
        houses: [ "6235aff3123202cbbb5b5346", "6235aff3123202cbbb5b534c" ]
       }, 
       {
        refv: 18, 
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
        houses: [ "6235aff3123202cbbb5b534b" ]        

       }, 
       {
        refv: 19, 
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
        houses: [ "6235aff3123202cbbb5b533f" ]
       }, 
       {
        refv: 20, 
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
        houses: [ "6235aff3123202cbbb5b535b" ]
       }, 
       {
        refv: 21, 
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
        houses: ["6235aff3123202cbbb5b5340" ]
       }, 
       {
        refv: 22, 
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
        houses: [ "6235aff3123202cbbb5b5363" ]
       }, 
       {
        refv: 23, 
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
        houses: [ "6235aff3123202cbbb5b5347" ]
       }, 
       {
        refv: 24, 
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
        houses: [ "6235aff3123202cbbb5b5341" ]
       }, 
       {
        refv: 25, 
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
        houses: ["6235aff3123202cbbb5b5342", "6235aff3123202cbbb5b5364" ]
       }, 
       {
        refv: 26, 
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
        houses: ["6235aff3123202cbbb5b5374"]
       }, 
       {
        refv: 27, 
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
        houses: ["6235aff3123202cbbb5b5360" ]
       }, 
       {
        refv: 28, 
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
        houses: [ "6235aff3123202cbbb5b5350" ]
       }, 
       {
        refv: 29, 
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
        houses: ["6235aff3123202cbbb5b5377", "6235aff3123202cbbb5b5378" ]
       }, 
       {
        refv: 30, 
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
        houses: [ "6235aff3123202cbbb5b5359" ]
       }, 
       {
        refv: 31, 
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
        houses: ["6235aff3123202cbbb5b535a", "6235aff3123202cbbb5b5345", "6235aff3123202cbbb5b535c" ]
       }, 
       {
        refv: 32, 
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
        houses: [ "6235aff3123202cbbb5b5357", "6235aff3123202cbbb5b533d", "6235aff3123202cbbb5b5351" ]
       }, 
       {
        refv: 33, 
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
        houses: ["6235aff3123202cbbb5b5361", "6235aff3123202cbbb5b533e" ]
       }, 
       {
        refv: 34, 
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
        houses: [ "6235aff3123202cbbb5b536b", "6235aff3123202cbbb5b5371","6235aff3123202cbbb5b5354", "6235aff3123202cbbb5b5356" ]
       }, 
       {
        refv: 35, 
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
        houses: [ "6235aff3123202cbbb5b534a" ]
       }, 
       {
        refv: 36, 
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
        houses: ["6235aff3123202cbbb5b5358", "6235aff3123202cbbb5b535d", "6235aff3123202cbbb5b535e", "6235aff3123202cbbb5b5355" ]
       }, 
       {
        refv: 37, 
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
        houses: [ "6235aff3123202cbbb5b536a", "6235aff3123202cbbb5b5370", "6235aff3123202cbbb5b5376", "6235aff3123202cbbb5b5362" ]
       }, 
       {
        refv: 38, 
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
        houses: [ "6235aff3123202cbbb5b534e", "6235aff3123202cbbb5b5366" ]
       }, 
       {
        refv: 39, 
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
        houses: ["6235aff3123202cbbb5b536d" ]
       }
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