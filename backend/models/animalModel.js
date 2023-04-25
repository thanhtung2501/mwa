import mongoose from 'mongoose';
import {User} from "./userModel.js";

export const STATUS_ANIMAL = {
    MISSING_ANIMAL: "MISSING_ANIMAL",
    FOUND_ANIMAL: "FOUND_ANIMAL",
    ADOPTED_ANIMAL: "ADOPTED_ANIMAL",
    AVAILABLE_ANIMAL: "AVAILABLE_ANIMAL",
    FOUND_MISSING_ANIMAL: "FOUND_MISSING_ANIMAL",
};

export const STATUS_REPORT = {
    MISSING_REPORT: "MISSING_REPORT",
    FOUND_REPORT: "FOUND_REPORT",
    ADOPT_REPORT: "ADOPT_REPORT",
};

const Animals = mongoose.Schema(
    {
        user_id: mongoose.Types.ObjectId,
        category: String,
        name: String,
        breed: String,
        sex: String,
        age: Number,
        color: String,
        weight: Number,
        status_animal: String,
        loss_date: Date,
        found_date: Date,
        adopt_date: Date,
        status_report: String,
        adopted_user: User,
        image_name: String,
        image_url: String
    }, {
    timestamps: true
}
);

export default mongoose.model('Animals', Animals);