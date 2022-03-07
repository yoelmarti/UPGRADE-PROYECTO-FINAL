const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


let villageSchema = new Schema(
    {
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
        houses: [ { type: mongoose.Types.ObjectId, ref: 'Houses' }],

    }, 
    {
        timestamps: true,
        collection: 'villages'
    }
)


villageSchema.plugin(uniqueValidator, { message: 'Este pueblo ya existe en nuestra BB.DD.' });


const Village= mongoose.model('villages', villageSchema);

module.exports = Village;