import { mongoose } from "mongoose";
import {Animal} from "./animalModel.js";
import { User } from "./userModel.js";

export const STATUS_ANIMAL = {
  MISSING_ANIMAL: "MISSING",
  FOUND_ANIMAL: "FOUND",
  ADOPTED_ANIMAL: "ADOPTED",
  AVAILABLE_ANIMAL: "AVAILABLE",
    FOUND_MISSING_ANIMAL: "FOUND_MISSING",
};

export const STATUS_REPORT = {
  MISSING_REPORT: "MISSING",
  FOUND_REPORT: "FOUND",
  ADOPT_REPORT: "ADOPT",
};

export const ANIMAL_CATEGORY = {
    CAT: "Cat",
    DOG: "Dog"
}
const schema = mongoose.Schema({
      loss_date: Date,
      found_date: Date,
      adopt_date: Date,
      status_report: String,
      animal: Animal,
      adopted_user: User
  },
    { timestamps: true }
);

export default mongoose.model("AnimalReport", schema);
