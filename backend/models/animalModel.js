import {mongoose} from "mongoose";


export const Animal = mongoose.Schema(
    {
        category: String,
        name: String,
        breed: String,
        sex: String,
        age: Number,
        color: String,
        weight: Number,
        status_animal: String,
        images: [
            {
                file_path: String,
            }
        ]
    }
);