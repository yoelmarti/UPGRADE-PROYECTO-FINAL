const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true }, //Indicamos que el campo email sólo puede tenerlo un usuario
        password: { type: String, required: true },
        avatar: { type: String },
        children: { type: Number, required: true },
        birthdate: { type: Date },
        profession: { type: String },
        houses: [ { type: mongoose.Types.ObjectId, ref: 'houses' }],
    },
    {
        timestamps: true,
        collection: 'users'
    }
);

userSchema.plugin(uniqueValidator, {message: 'Email already in use.'}); //
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash( this.password, saltRounds);
    next();
})

const User= mongoose.model('users', userSchema);

module.exports = User;