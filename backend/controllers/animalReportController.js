import AnimalService from "../services/animalService.js";
import {STATUS_ANIMAL, STATUS_REPORT} from "../models/reportAnimalModel.js";

const AnimalReportController = {
    getMissingAnimals: async function (req, res, next) {
        try {
            const result = await AnimalService.getAnimalByReportStatus(STATUS_REPORT.MISSING_REPORT);
            res.json(result);
        } catch (e) {
            next(e);
        }
    },
    getFoundAnimals: async function (req, res, next) {
        try {
            const result = await AnimalService.getAnimalByReportStatus(STATUS_REPORT.FOUND_REPORT);
            res.json(result);
        } catch (e) {
            next(e);
        }
    },

    addMissingAnimal: async function (req, res, next) {
        try {
            let newAnimalReport = req.body;
            newAnimalReport.status_report = STATUS_REPORT.MISSING_REPORT;
            newAnimalReport.animal.status_animal = STATUS_ANIMAL.MISSING_ANIMAL;
            const result = await AnimalService.create(newAnimalReport);
            res.json(result);
        } catch (e) {
            next(e);
        }
    },
    addFoundAnimal: async function (req, res, next) {
        try {
            let newAnimalReport = req.body;
            newAnimalReport.status_report = STATUS_REPORT.FOUND_REPORT;
            newAnimalReport.animal.status_animal = STATUS_ANIMAL.FOUND_ANIMAL;
            const result = await AnimalService.create(newAnimalReport);
            res.json(result);
        } catch (e) {
            next(e);
        }
    },

    getAnimalByID: async function (req, res, next) {
        try {
            const { animal_report_id } = req.params;
            const result = await AnimalService.getById(animal_report_id);
            console.log("2343")
            res.json(result);
        } catch (e) {
            next(e);
        }
    },

    updateAnimal: async function (req, res, next) {
        try {
            const { animal_report_id } = req.params;
            const { updated_animal } = req.body;
            const result = await AnimalService.update(animal_report_id, updated_animal);
            res.json(result);
        } catch (e) {
            next(e);
        }
    },

    deleteAnimal: async function (req, res, next) {
        try {
            const { animal_report_id } = req.params;
            const result = AnimalService.delete(animal_report_id);
            res.json(result);
        } catch (e) {
            next(e);
        }
    },
    getAdoptAnimals: async function (req, res, next) {
        try {
            const result = await AnimalService.getAnimalByReportStatus(STATUS_REPORT.ADOPT_REPORT);
            res.json(result);
        } catch (e) {
            next(e);
        }
    },
    addAdoptAnimal: async function (req, res, next){
        try {
            let newAnimalReport = req.body;

            newAnimalReport.status_report = STATUS_REPORT.ADOPT_REPORT;
            newAnimalReport.animal.status_animal = STATUS_ANIMAL.ADOPTED_ANIMAL;
            newAnimalReport.adopted_user.password = null;

            const result = await AnimalService.create(newAnimalReport);
            res.json(result)

        } catch (e){
            next(e);
        }
    }
};

export default AnimalReportController;