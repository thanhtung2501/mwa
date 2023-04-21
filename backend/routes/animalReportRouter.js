import { Router } from "express";

import AnimalReportController from "../controllers/animalReportController.js";
const router = Router();

router.get("/missingAnimal", AnimalReportController.getMissingAnimals);
router.post("/missingAnimal", AnimalReportController.addMissingAnimal);
router.get("/foundAnimal", AnimalReportController.getFoundAnimals);
router.post("/foundAnimal", AnimalReportController.addFoundAnimal);
router.get("/adoptAnimal", AnimalReportController.getAdoptAnimals);
router.post("/adoptAnimal", AnimalReportController.addAdoptAnimal);
router.get("/:animal_report_id", AnimalReportController.getAnimalByID);
router.patch("/:animal_report_id", AnimalReportController.updateAnimal);
router.delete("/:animal_report_id", AnimalReportController.deleteAnimal);
export default router;
