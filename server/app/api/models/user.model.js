const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true //indicamos que solo puede haber un usuario con un email único
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    children: {
        type: Number,
        required: true
    },
    birthDate: {
        type: Date,
    },
    profession: {
        type: String
    }

});

userSchema.plugin(uniqueValidator, {message: 'Email already in use.'}); //
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash( this.password, saltRounds);
    next();
})

const User= mongoose.model('users', userSchema);

module.exports = User;