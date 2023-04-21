import { Router } from "express";

import AnimalController from "../controllers/animalReportController.js";
const router = Router();

router.get("", AnimalController.getAnimalsByStatus);
router.post("", AnimalController.getAnimalsByStatus);
router.get("/:animal_id", AnimalController.getAnimalByID);
router.patch("/:animal_id", AnimalController.updateAnimal);
router.delete("/:animal_id", AnimalController.deleteAnimal);
export default router;
