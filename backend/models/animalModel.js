import { mongoose } from "mongoose";

export const STATUS_ANIMAL = {
  MISSING_ANIMAL: "MISSING",
  FOUND_ANIMAL: "FOUND",
  ADOPTED_ANIMAL: "ADOPTED",
  AVAILABLE_ANIMAL: "AVAILABLE",
};

export const STATUS_REPORT = {
  MISSING_REPORT: "MISSING",
  FOUND_REPORT: "FOUND",
  ADOPT_REPORT: "ADOPT",
};

const schema = mongoose.Schema(
  {
    category: String,
    name: String,
    breed: String,
    sex: String,
    age: Number,
    color: String,
    weight: Number,
    status_animal: String,
    report: [
      {
        createDate: Date,
        lossDate: Date,
        status_report: String,
      },
    ],
    images: [
      {
        filename: String,
      },
    ],
  },
  { timestamp: true }
);

export default mongoose.model("Animal", schema);
