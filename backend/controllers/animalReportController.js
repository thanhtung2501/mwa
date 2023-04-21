import AnimalService from "../services/animalService.js";
import { STATUS_ANIMAL, STATUS_REPORT } from "../models/animalModel.js";

const ANIMAL_ACTION = {
    LIST_MISSING_ANIMALS: "listMissingAnimals",
    ADD_MISSING_ANIMAL: "addMissingAnimal",
    LIST_FOUND_ANIMALS: "listFoundAnimalS",
    ADD_FOUND_ANIMAL: "addFoundAnimal",
    LIST_ADOPT_ANIMALS: "listAdoptAnimals",
    ADD_ADOPT_ANIMAL: "addAdoptAnimal"
};

const AnimalController = {
    getAnimalsByStatus: async function (req, res, next) {
        try {
            const { action } = req.query;
            console.log(action);

            if (action === ANIMAL_ACTION.ADD_ADOPT_ANIMAL) {
                let newAnimalReport = req.body;

                newAnimalReport.status_report = STATUS_REPORT.ADOPT_REPORT;
                newAnimalReport.status_animal = STATUS_ANIMAL.ADOPTED_ANIMAL;
                newAnimalReport.adopted_user.password = '';

                const result = await AnimalService.create(newAnimalReport);
                return res.json(result);
            }

            if (action === ANIMAL_ACTION.ADD_FOUND_ANIMAL) {
                let newAnimalReport = req.body;

                newAnimalReport.status_report = STATUS_REPORT.FOUND_REPORT;
                newAnimalReport.status_animal = STATUS_ANIMAL.FOUND_ANIMAL;

                const result = await AnimalService.create(newAnimalReport);
                return res.json(result);
            }

            if (action === ANIMAL_ACTION.ADD_MISSING_ANIMAL) {
                let newAnimalReport = req.body;

                newAnimalReport.status_report = STATUS_REPORT.MISSING_REPORT;
                newAnimalReport.status_animal = STATUS_ANIMAL.MISSING_ANIMAL;

                const result = await AnimalService.create(newAnimalReport);
                return res.json(result);
            }

            if (action === ANIMAL_ACTION.LIST_ADOPT_ANIMALS) {
                const result = await AnimalService.getAnimalByReportStatus(STATUS_REPORT.ADOPT_REPORT);
                return res.json(result);
            }

            if (action === ANIMAL_ACTION.LIST_FOUND_ANIMALS) {
                const result = await AnimalService.getAnimalByReportStatus(STATUS_REPORT.FOUND_REPORT);
                return res.json(result);
            }

            if (action === ANIMAL_ACTION.LIST_MISSING_ANIMALS) {
                const result = await AnimalService.getAnimalByReportStatus(STATUS_REPORT.MISSING_REPORT);
                return res.json(result);
            }

            const result = await AnimalService.getAll();
            return res.json(result);
        } catch (error) {
            next(error);
        }
    },

    getAnimalByID: async function (req, res, next) {
        try {
            const { animal_id } = req.params;
            const result = await AnimalService.getById(animal_id);
            res.json(result ? result : {});
        } catch (e) {
            next(e);
        }
    },

    updateAnimal: async function (req, res, next) {
        try {
            const { animal_id } = req.params;
            const { name, breed, sex, age, color, weight } = req.body;
            const result = await AnimalService.update(animal_id, name, breed, sex, age, color, weight);
            res.json({
                success: true,
                data: result
            });
        } catch (e) {
            next(e);
        }
    },

    deleteAnimal: async function (req, res, next) {
        try {
            const { animal_id } = req.params;
            const result = AnimalService.delete(animal_id);
            res.json(result);
        } catch (e) {
            next(e);
        }
    },
};

export default AnimalController;