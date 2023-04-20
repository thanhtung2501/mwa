import mongoose from "mongoose";

const schema = new mongoose.Schema({
    "street": String,
    "userId": mongoose.Types.ObjectId,
    "city": String,
    "zipCode": String,
    "state": String,
    "location": [Number],
}, {
    timestamps: true
});

export default mongoose.model('Address', schema);