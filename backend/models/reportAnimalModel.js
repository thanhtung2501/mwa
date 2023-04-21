import { mongoose } from "mongoose";
import {AnimalSchema} from "../models/reportAnimalModels.js";

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
const schema = mongoose.Schema(
  {
      lossDate: Date,
      status_report: String,
      animal: AnimalSchema
      },
  { timestamp: true }
);

export default mongoose.model("Animal", schema);
