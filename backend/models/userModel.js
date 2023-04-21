import mongoose from "mongoose";

const schema = new mongoose.Schema({
    "name": { type: String, require: true },
    "address": {
        "street": String,
        "city": String,
        "zipCode": String,
        "state": String,
        "location": [Number]
    },
    "phoneNumber": String,
    "email": String,
    "password": String
}, {
    timestamps: true
});

export default mongoose.model('User', schema);