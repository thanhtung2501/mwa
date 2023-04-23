import mongoose from "mongoose";

export const User = new mongoose.Schema({
    "name": { type: String, require: true },
    "address": {
        "street": String,
        "city": String,
        "zipCode": String,
        "state": String,
        "location": [Number]
    },
    "phoneNumber": String,
    "email": { type: String, unique: true },
    "password": String
}, {
    timestamps: true
});

export default mongoose.model('User', User);