"use strict";

module.exports = function(MongooseConnection, Schema) {

    let userSchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            index: true,
            unique: true,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: true
        },
        salt: {
            type: String,
            required: true
        }
    })

    return MongooseConnection.model('User', userSchema)
}