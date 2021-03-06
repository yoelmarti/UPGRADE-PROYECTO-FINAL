const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let houseSchema = new Schema(
    {
        refh: {type: Number},
        meters: { type: Number },
        rooms: { type: Number, required: true },
        bathrooms: { type: Number },
        availability: { type: Boolean, required: true },
        image: {type: String},
        village: [ { type: mongoose.Types.ObjectId, ref: 'villages' }],
    }, 
    {
        timestamps: true,
        collection: 'houses'
    }
);


const House= mongoose.model('houses', houseSchema); 
module.exports = House;