const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required : [true, 'please add a name'],
        maxLength : [20, 'name too long']
    },
    email : {
        type : String,
        required : [true, 'please add an email'],
        maxLength : [30, 'email too long'],
        immutable : [true, 'you cannot change your email'],
        lowercase: true,
        unique: true,
        validate: {
            validator: v => v.endsWith('@esi-sba.dz'),
            message: `this email does not belong to esi sba`
        }
    },
    password : {
        type : String,
        required : [true, 'please add a password']
    }
}, {
    timestamps : true
} )

module.exports = mongoose.model('User', userSchema)