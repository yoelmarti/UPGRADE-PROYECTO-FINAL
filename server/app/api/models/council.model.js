const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const councilSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true }, //Indicamos que el campo email sólo puede tenerlo un usuario
        password: { type: String, required: true },
        position: { type: String },
        contact: { type: String},
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(uniqueValidator, {message: 'Email already in use.'}); //
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash( this.password, saltRounds);
    next();
})

const Council= mongoose.model('councils', councilSchema);

module.exports = Council;