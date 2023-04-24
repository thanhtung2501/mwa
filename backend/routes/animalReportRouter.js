import { Router } from "express";
import multer from 'multer';
import AnimalController from "../controllers/animalReportController.js";

const upload = multer({
    dest: 'uploads/'
});

const router = Router();

router.get("", AnimalController.performAnimalsByStatus);
router.post("", AnimalController.performAnimalsByStatus);
router.get("/:animal_id", AnimalController.getAnimalByID);
router.patch("/:animal_id", AnimalController.updateAnimal);
router.delete("/:animal_id", AnimalController.deleteAnimal);
export default router;
