const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = require('../../api/models/user.model');
const uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const councilSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true }, //Indicamos que el campo email sólo puede tenerlo un usuario
        password: { type: String, required: true },
        role: { type: String},
        village:  [{ type: mongoose.Types.ObjectId, ref: 'villages' }],
    },
    {
        collection: 'users',
        timestamps: true,
    }
);

councilSchema.plugin(uniqueValidator, {message: 'Email already in use.'}); //
councilSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash( this.password, saltRounds);
    next();
})

const Council= mongoose.model('councils', councilSchema);

module.exports = Council;