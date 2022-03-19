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
    description: "Kuartango está situado en la zona occidental del Territorio Histórico de Álava, al oeste de Vitoria-Gasteiz, y pertenece a la Cuadrilla de Añana. Está regado por el río Baias y arropado por los montes Gibijo y las sierras de Árkamo y Badaia.El valle de Kuartango se enclava entre las sierras de Arkamo (Red Natura 2000), Gibijo y Badaia. Lo recorre de norte a sur el río Baias, afluente del Ebro. numerosas rutas de senderismpo, entre ellas al Salto del Nervión (mayor cascada de España), Pico Marinda, campo dolménico de Katadiano o Lobera de Gibijo.",
  
    web: "https://kuartango.eus/",
    features: {
        bar: true,
        farmacy: false ,
        supermarket: false,
        doctor: true,
    },
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
        description: "Letur, está construido y asentado sobre una gran cascada de roca que se ha ido formando por las fuentes que van cargadas de calcio y que se precipitan y forman las tobas y travertinos. La rica flora de Letur confiere a su paisaje una belleza muy especial, que se convertirá en un paraíso para los amantes de la naturaleza y del turismo rural.",
        web: "https://www.letur.es/",
        features: {
            bar: true,
            farmacy: true ,
            supermarket: true,
            doctor: true,
        },
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
        description: "Ubicada en la Sierra del Segura, es el centro neurálgico de este destino turístico cada vez mas conocido y apreciado, nuestra localidad tiene la ubicación perfecta para descubrir toda la Sierra del Segura. Andar por Elche de la Sierra es caminar por un municipio con miles de años de historia. Desde la prehistoria, el ser humano se ha asentado en estos cerros.",
        web: "https://www.elchedelasierra.es/",
        features: {
            bar: true,
            farmacy: true ,
            supermarket: true,
            doctor: true,
        },
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
        description: "La localidad se encuentra en el extremo norte de la provincia de Ávila en el límite con las provincias de Salamanca y Valladolid y próximo también a la provincia de Zamora, a 74 km de la capital provincial en la llanura castellana de la comarca de Arévalo, más conocida como La Moraña. Está emplazada a 809 m de altura sobre el nivel del mar5​6​ entre los ríos Zapardiel y Trabancos.",
        web: "https://www.madrigaldelasaltastorres.es",
        features: {
            bar: true,
            farmacy: true ,
            supermarket: true,
            doctor: true,
        },
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
        description: "La villa se encuentra, geográficamente, en el punto de transición entre la sierra de la Demanda (perteneciente al sistema Ibérico) y la Ribera del Duero (en la Meseta Septentrional). No obstante, se considera a Caleruega como una localidad perteneciente a la ya mencionada Ribera, de hecho pertenece también a la Denominación de Origen de vinos Ribera del Duero.",
        web: "http://www.caleruega.es",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Nofuentes es una localidad y una entidad local menor situada en la provincia de Burgos, comunidad autónoma de Castilla y León (España), comarca de Las Merindades, partido judicial de Villarcayo, capital del municipio de Merindad de Cuesta-Urria. La localidad llegó a contar con una estación de ferrocarril perteneciente a la línea Santander-Mediterráneo, que estuvo operativa entre 1930 y 1985. En la actualidad la antigua línea férrea ha sido reconvertida en una vía verde.",
        web: "https://merindaddecuestaurria.burgos.es/",
        features: {
            bar: true,
            farmacy: true ,
            supermarket: false,
            doctor: true,
        },
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
        description: "Covarrubias se encuentra en un lugar estratégico por donde pasan varias rutas muy conocidas desde épocas antiguas hasta nuestros días como son la Ruta de la Lana, el Camino del Cid y el Camino de Santiago, es por ello, que esta villa medieval es también conocida como “Cuna de Castilla”. Presenta un entramado urbano bien conservado, unido a un patrimonio monumental amplio, en la que destaca el Torreón de Fernán González, la única fortaleza castellana anterior al siglo XI que se conserva.",
        web: "http://www.covarrubias.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "La localidad de Belorado forma parte del Caminos de Santiago de Compostela: Camino francés y Caminos del Norte de España. Ubicado al este de la provincia, próxima a La Rioja y en la falda de la Sierra de la Demanda, al pie de los Montes de Ayago. Se encuentra situado en la comarca de Montes de Oca, partido judicial de Briviesca, a 47,3 Kilómetros de Burgos. Su principal cauce fluvial es el río Tirón (afluente del Ebro), que nace en la Sierra de la Demanda burgalesa.",
        web: "https://www.belorado.org/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "La conquista por los reyes castellanos de la plaza de Aza a los árabes, marca el nacimieno de La Comunidad de Villa y Tierra de Aza. Dedicadas durante siglos a la agricultura y a la ganadería, las gentes de La Sequera, que han visto como el éxodo del campo a la ciudad en los años 60 y 70 del siglo XX diezmaba su población, intentan en este iniciado siglo XXI buscar nuevas vías de progreso y prosperidad, sin abandonar sus raíces.",
        web: "https://es.wikipedia.org/wiki/La_Sequera_de_Haza",
        features: {
            bar: false,
            farmacy: false ,
            supermarket: false,
            doctor: false,
        },
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
        description: "En el municipio se puede observar el típico paisaje de la Ribera del Duero: altas y pedregosas parameras, seguido de una ondulada campiña dominada por el cereal y el viñedo así como una fértil vega en el fondo del valle. Pueblo eminentemente agrícola, cuenta también con una pequeña industria en desarrollo y varias bodegas.",
        web: "http://www.gumieldeizan.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: false,
            doctor: true,
        },
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
        description: "Huete se encuentra en el noroeste de la provincia, a 54 km de Cuenca y a 120 km de Madrid. Se localiza en las laderas este y sur de un alto cerro, conocido como del Castillo, entre el río Cauda o Borbotón y el arroyo de las Canales, en un valle cerca de la confluencia de ambos cursos con el río Mayor, en la comarca conquense de la Alcarria.",
        web: "http://www.huete.org/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Orea, la cumbre de Castilla la Macha (1498m de altitud) se encuentra en el Parque Natural del Alto Tajo, dentro de los denominados Montes Universales. Su ubicación nos regala maravillosos paisajes, cielos estrellados, innumerables arroyos y fuentes, ríos, praderas… Sus gentes y tradiciones nos muestran una forma diferente de vivir y ver la vida en plena naturaleza",
        web: "http://www.orea.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Sigüenza es una Ciudad Medieval situada en la Sierra Norte de la provincia de Guadalajara, fue declarada Conjunto Histórico Artístico en 1965. Es el segundo destino turístico de Castilla-La Mancha, hecho que ha sido potenciado en los últimos años con su elección como capital del turismo rural en el 2017; y con la celebración del Año Europeo del Patrimonio (2018), en el que se valoró la perfecta simbiosis que en ella existe entre su patrimonio cultural y natural.",
        web: "https://www.siguenza.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "En plena Sierra Norte de Guadalajara, se encuentra ubicada la localidad de Arbancón, un pueblo privilegiado para todos aquellos amantes de la naturaleza y del tiempo libre enclavado en una encrucijada perfecta, ya que se encuentra a las puertas de la Arquitectura Negra, cerca de los embalses de Alcorlo, Beleña, Pozo de los Ramos y el Vado y también a la ruta del Románico Rural.",
        web: "http://www.arbancon.es/",
        features: {
            bar: true,
            farmacy: false ,
            supermarket: true,
            doctor: false,
        },
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
        description: "La localidad está situada a una altitud de 862 metros. El municipio está situado en el norte de la provincia, entre La Alcarria y La Sierra; pertenece a la influencia de Sigüenza. Termina en Mandayona el parque natural del Barranco del Río Dulce. La temperatura media en Mandayona es de 12,41 °C y una precipitación anual promedio de 449,93mm. Las heladas son relativamente frecuentes",
        web: "https://www.ayuntamiento.es/mandayona",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "En la actualidad, cuenta con una población estancada en torno a los 500 habitantes. Santa Ana la Real tiene actualmente puestas sus expectativas en el desarrollo turístico de la zona. Este sector en alza puede abrir nuevos caminos de futuro para una población identificada con el medio, amante de sus costumbres y tradiciones que se resiste a sucumbir en la encrucijada del tiempo.",
        web: "http://www.santaanalareal.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "La localidad cuenta con un importantísimo el patrimonio histórico y etnográfico en constante evolución. Las actuaciones llevadas a cabo durante los últimos años combinan la rehabilitación del patrimonio y las nuevas tecnologías, con el fin de permitir al visitante disfrutar del entorno utilizando su propio móvil y sumergirse en el pasado del recinto amurallado.",
        web: "http://www.sanvicentedelasonsierra.org/es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Nalda es un municipio y localidad de la comunidad autónoma de La Rioja (España). Situado en el Valle del Iregua y a las faldas del Moncalvillo está enclavado en un punto cuyo paisaje es espectacular. El relieve está caracterizado por el valle del río Iregua y las elevaciones septentrionales de la sierra de Moncalvillo al suroeste y de la sierra de Camero Viejo al sureste. Al norte el terreno es más llano, abriéndose al valle del Ebro. Por el territorio discurren otros pequeños ríos (Antiguo, Trujal, Bueyo) y barrancos que desaguan en el Iregua.",
        web: "https://ayto-nalda.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "La principal actividad económica del pueblo en la actualidad está basada en el turismo. Sus principales reclamos turísticos son su arquitectura típica, su gastronomía (con el cocido maragato como estandarte). Los restaurantes más conocidos del pueblo están situados en casas maragatas rehabilitadas para ese menester. En la actualidad existen dos hoteles y cuatro restaurantes, además de una casa rural de alojamiento compartido y una casa rural de alquiler. También existe la posibilidad de acampar en el camping situado a la entrada del pueblo.",
        web: "http://www.aytosantacolombadesomoza.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "El municipio de Fabero se ha convertido el primer conjunto etnológico minero Bien de Interés Cultural (BIC) de la Comunidad. La declaración de Bien de Interés Cultural trata de valorar y proteger este sistema patrimonial en su conjunto. No obstante, se singularizan y delimitan aquellos elementos nodales de mayor interés. El valor natural del municipio de Fabero se encuentra en su vegetación, integrada por multitud de especies que jalonan sus montes y alrededores. ",
        web: "https://fabero.org/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Este municipio es considerado uno de los espacios paisajísticos más bellos del sur de España. Entre numerosos barrancos, impresionantes tajos y numerosos puertos destaca el Barranco de la Rejía situado en la Sierra Parda de Tolox. .Es uno de los enclaves más impresionantes, por su belleza y espectacularidad con una caída vertical de 51 metros. Podemos deslumbrarnos con la Chorrera de la Rejía, el salto de agua de mayor altura de la provincia de Málaga creado por la Naturaleza.",
        web: "https://www.tolox.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Benarrabá es un municipio español de la provincia de Málaga, Andalucía, situado en el oeste de la provincia en el Valle del Genal, siendo una de las poblaciones que conforman la comarca de la Serranía de Ronda. En cuanto a su geografía cuenta con un territorio predominantemente montañoso, bañado por los ríos Guadiaro y Genal. Ocupa una extensión de 24,90 km cuadrados.",
        web: "https://www.benarraba.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Genalguacil es un pequeño pueblo situado en el corazón del Valle del Genal, un lugar privilegiado de gran belleza, relativamente próximo al mar, pero en plena Serranía de Ronda. El pueblo con su trama de calles y callejuelas con fuertes pendientes y blancas fachadas propias de su origen morisco, nos ofrece un paseo entre arriates cuajados de flores",
        web: "https://www.genalguacil.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Su casco urbano es de traza medieval, con largas calles paralelas que estuvieron en su día enmarcadas por un cinturón de murallas que fueron reutilizadas en construcciones posteriores. Su trazado presenta largas calles longitudinales, conforme a la línea del río y su aspecto actual barroco se debe a las grandes reformas de los siglos XVI y fundamentalmente XVII y XVIII.",
        web: "http://www.losarcos.es/es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Allo es una villa y municipio español de la Comunidad Foral de Navarra, situado en la merindad de Estella, en la comarca de Estella Oriental y a 50,7 km de la capital de la comunidad, Pamplona. La localidad de Allo está situada en la parte occidental de la Comunidad Foral de Navarra, dentro de la comarca de Tierra Estella a una altitud de 432 msnm. Allo vio progresar su economía, y hacia 1920 contaba con una gran fábrica de harinas, una destiladora de alcoholes y anisados y un hospital.",
        web: "http://www.villadeallo.org/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Orisoain es un pequeño pueblo pintoresco y tranquilo situado en la Valdorba, la Valdorba es uno del los conjuntos de valles más significativos del turismo rural en Navarra, ya que combina un esplendido y variado paisaje natural, poblado de extensos robledales y pinares, con el sorprendente patrimonio románico de la Valdorba.",
        web: "https://www.ayuntamiento.es/orisoain",
        features: {
            bar: true,
            farmacy: true,
            supermarket: false,
            doctor: true,
        },
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
        description: "La localidad de Berbinzana está situada en la parte central de la Comunidad Foral de Navarra dentro de la Zona Media de Navarra o Navarra Media a una altitud 316 msnm, situado en la Merindad de Olite, en la comarca de Tafalla, junto al río Arga y a 50 km. de la capital, Pamplona. Berbinzana, pertenece al ecosistema y clima mediterráneo continental, con inviernos largos y fríos, primaveras cada vez mas cortas, veranos calurosos y otoños apacibles",
        web: "http://www.berbinzana.info/es/presentacion.php",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "En Milagro confluyen las aguas del Aragón y del Ebro y constituye un auténtico mirador desde el que se divisa todo el valle del Aragón, los municipios que se sitúan en la vega del río, la cima del Moncayo y, en los días claros, las cumbres de los Pirineos y la Higa de Monreal. La pesca, los senderos y los paisajes naturales, son algunos de los grandes atractivos, además de los puntos de interés histórico-artístico y social localizados en el casco urbano",
        web: "https://milagro.es/",
        features: {
            bar: true,
            farmacy: false ,
            supermarket: true,
            doctor: false,
        },
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
        description: "Es un pueblo que siempre ha estado comprometido con el medio ambiente, resultó ganador con un accesit en el Congreso Nacional de Medio Ambiente en el 2019. Algunas de las acciones llevadas a cabo son: instalación de un punto de recarga gratuito para vehículos eléctricos, plantaciones de arbolado, producción de energía limpia mediante placas solares en edificios municipales, etc. También destaca en materia de innovación digital tanto por la fibra óptica como por sus usos como son el internet de las pequeñas cosas (control de riego de jardines, sensores), digitalización del archivo municipal, etc.",
        web: "http://www.legarda.es/",
        features: {
            bar: false,
            farmacy: false ,
            supermarket: false,
            doctor: true,
        },
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
        description: "Paredes de Nava está a una distancia de 20 km de Palencia, la capital provincial, en la comarca de Tierra de Campos. Fue desde la Edad Media hasta mediados del siglo XX el pueblo de la provincia de Palencia con el término municipal más extenso, lo cual permitió que Paredes de Nava fuese también la localidad de mayor importancia demográfica de toda la provincia, llegando, en ocasiones, a competir con la propia capital.",
        web: "https://paredesdenava.org/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Aldea del Obispo es un municipio y localidad española de la provincia de Salamanca, en la comunidad autónoma de Castilla y León. Se integra dentro de la comarca de Ciudad Rodrigo y la subcomarca del Campo de Argañán. Pertenece al partido judicial de Ciudad Rodrigo. En sus inmediaciones se encuentra el Real Fuerte de la Concepción que, junto con Ciudad Rodrigo, San Felices de los Gallegos y Almeida, formó parte de un conjunto de plazas militares clave durante las guerras en torno a la frontera de España con Portugal.",
        web: "https://aytoaldeadelobispo.es/web/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Esta pequeña población de la comarca de Tierras Altas está ubicada en el norte de la provincia, en el límite con La Rioja bañado por el río Mayor en la vertiente mediterránea y afluente del río Alhama al sur de la sierra de Achena y al norte de la de Alcarama.1 Se encuentra a 4 kilómetros de San Pedro Manrique.",
        web: "https://sarnago.com/",
        features: {
            bar: false,
            farmacy: true ,
            supermarket: true,
            doctor: true,
        },
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
        description: "El Burgo de Osma y su entorno, reúnen todos los elementos necesarios para tener una calidad de vida inmejorable en el mundo rural. Un pueblo que conjuga los servicios necesarios para poder tele-trabajar y a su vez disponer de todo tipo de servicios y ofertas deportivas, con la cercanía de la naturaleza y su entorno además de estar geográficamente muy bien situado, cercano a la mayoría de las ciudades importantes como Madrid, Zaragoza, Valladolid etc. Su oferta natural, patrimonial y de servicios, convierte al Burgo de Osma como municipio alternativa a la calidad de vida y en el mundo rural.",
        web: "https://www.burgodeosma.com/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Langa ha sido declarada Conjunto Histórico Artístico en 2007. El castillo actual es de los siglos XIV-XV, su origen se remonta al s.IX como torre de vigilancia, en la actualidad se ha transformado en el “Centro de interpretación Ruta de las Atalayas”, donde se muestra la historia de las atalayas y fortalezas situadas en la frontera del Duero en nuestra provincia.",
        web: "http://www.langadeduero.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "La villa de Arcos de Jalón está ubicada en el valle del río Jalón, próxima a su nacimiento, al sureste de la provincia de Soria y rayando con las provincias de Zaragoza y Guadalajara, a 826 m sobre el nivel del mar, en las faldas de la meseta de la Sierra Ministra. El territorio se reparte entre las cuencas hidrográficas del Duero y el Ebro, siendo a la cuenca del Ebro a la que pertenece el municipio de Arcos de Jalón.",
        web: "www.arcosdejalon.es",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Villar del Salz es un municipio y localidad de España, en la provincia de Teruel, perteneciente a la comarca del Jiloca, comunidad autónoma de Aragón. Situado al Noroeste de la provincia de Teruel, en el límite con la provincia de Guadalajara. Los 38,69 km2 de superficie de Villar del Salz se enmarcan en plena Sierra Menera.",
        web: "http://www.villardelsalz.es/",
        features: {
            bar: true,
            farmacy: true ,
            supermarket: false,
            doctor: false,
        },
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
        description: "Oliete es una localidad enclavada al nordeste de la provincia de Teruel, a orillas del río Martín. El término municipal cuenta con una superficie de 86 km2 y el punto más alto del casco urbano está a 541 metros sobre el nivel del mar. Oliete se sitúa a las orillas del Río Martín, en la provincia de Teruel. Un pequeño pueblo con mucho encanto y una amplia posibilidad de actividades: naturaleza, gastronomía, un legado ibero y la Sima más grande de Europa.",
        web: "https://www.oliete.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: true,
        },
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
        description: "Valoria la Buena es una localidad y municipio de la provincia de Valladolid, Castilla y León, España. Con una extensión de 43 km², está situada a 27 km al noroeste de la capital, en la comarca de la Campiña del Pisuerga y adscrita enológicamente a la Denominación de Origen Cigales. Valoria la Buena tiene un clima templado con verano seco. Situada en un estratégico valle, es probable que el asentamiento proceda de época celtíbera. En el siglo XIV ya hay constancia de su denominación Valoria la Buena, del latín Vall-Aurea, es decir, valle aurífero, siendo su significado La villa del buen valle.",
        web: "http://www.valorialabuena.com/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: false,
            doctor: true,
        },
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
        description: "El relieve del término municipal no es tan accidentado, solo forma colinas y cerros de pocas elevación; donde tiene su altura máxima en el Coronas con 917 metros de altitud. El terreno está formado por pizarras que es la roca dominante de la zona.. Los ríos que cruzan el municipio es el Aliste y sus afluentes. Abundan campos de cúltivos, bosque de rebollos, pastos y campos. El tipo de clima de Rabanales es de mediterráneo continental; con inviernos muy fríos y veranos muy suaves. Suele llover en ocasiones.",
        web: "https://www.aytorabanales.es/",
        features: {
            bar: true,
            farmacy: true,
            supermarket: true,
            doctor: false,
        },
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