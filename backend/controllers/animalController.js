import Animal from "../models/animalModel.js";

const AnimalController = {
    getAllAnimals: async function (req, res, next) {
        try {
            const result = await Animal.find({});
            res.json(result);
        } catch (e) {
            next(e);
        }
    },

    addAnimal: async function (req, res, next) {
        try {
            const newAnimal = req.body;
            const result = await Animal.create(newAnimal);
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