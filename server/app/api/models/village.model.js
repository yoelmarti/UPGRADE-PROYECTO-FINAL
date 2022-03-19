const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


let villageSchema = new Schema(
    {
        refv: { type: Number},
        name: { type: String, required: true, unique: true },
        location: { 
                    region: { type: String, required: true },
                    province: { type: String, required: true },
                    latitute: { type: Number },
                    longitude: { type: Number }
        },
        population: { type: Number },
        contact: {
                phone: { type: String, required: true },
                email: { type: String }
        },
        image: {type: String},
        description: { type: String},
        web: { type: String},
        features: {
            bar: { type: Boolean},
            farmacy: { type: Boolean},
            supermarket: { type: Boolean},
            doctor: { type: Boolean},
        },
        houses: [ { type: mongoose.Types.ObjectId, ref: 'houses' }]
    }, 
    {
        timestamps: true,
        collection: 'villages'
    }
)


villageSchema.plugin(uniqueValidator, { message: 'Este pueblo ya existe en nuestra BB.DD.' });


const Village= mongoose.model('villages', villageSchema);

module.exports = Village;