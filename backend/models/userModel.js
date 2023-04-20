import mongoose from "mongoose";

const schema = new mongoose.Schema({
    "name": { type: String, require: true },
    "addressId": mongoose.Types.ObjectId,
    "phoneNumber": String,
    "email": String,
    "password": String
}, {
    timestamps: true
});

export default mongoose.model('User', schema);