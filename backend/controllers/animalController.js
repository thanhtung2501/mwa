import Animal from "../models/animalModel.js";
import AnimalService from "../services/animalService.js";
import {STATUS_ANIMAL, STATUS_REPORT} from "../models/reportAnimalModel.js";

const AnimalController = {
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
            let newAnimal = req.body;
            newAnimal.status_report = STATUS_REPORT.MISSING_REPORT;
            newAnimal.animal.status_animal = STATUS_ANIMAL.MISSING_ANIMAL;
            const result = await AnimalService.create(newAnimal);
            res.json(result);
        } catch (e) {
            next(e);
        }
    },

    getAnimalByID: async function (req, res, next) {
        try {
            const { animal_id } = req.params;
            const result = await Animal.findOne({ _id: animal_id }, { _id: 0 });
            res.json(result);
        } catch (e) {
            next(e);
        }
    },

    updateAnimalByID: async function (req, res, next) {
        try {
            const { animal_id } = req.params;
            const { updated_animal } = req.body;
            const result = await Animal.updateOne(
                { _id: animal_id },
                { $set: { _id: animal_id, Animal: updated_animal } }
            );
            res.json(result);
        } catch (e) {
            next(e);
        }
    },

    deleteAnimal: async function (req, res, next) {
        try {
            const { animal_id } = req.params;
            const result = await Animal.deleteOne({ _id: animal_id });
            res.json(result);
        } catch (e) {
            next(e);
        }
    }
};

export default AnimalController;