const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let houseSchema = new Schema(
    {
        meters: { type: Number },
        rooms: { type: Number, required: true },
        bathrooms: { type: Number },
        availability: { type: Boolean, required: true },
        village: [ { type: mongoose.Types.ObjectId, ref: 'Villages' }],
    }, 
    {
        timestamps: true,
        collection: 'houses'
    }
);


const House= mongoose.model('houses', houseSchema); 
module.exports = House;