import { Router } from "express";

import AnimalController from "../controllers/animalController.js";
const router = Router();

router.get("/", AnimalController.getAllAnimals);
router.post("/", AnimalController.addAnimal);
router.get("/:animal_id", AnimalController.getAnimalByID);
router.patch("/:animal_id", AnimalController.updateAnimalByID);
router.delete("/:animal_id", AnimalController.deleteAnimal);
export default router;
