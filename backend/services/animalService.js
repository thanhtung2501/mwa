import Animal from "../models/animalModel.js";

const AnimalService = {
    getAll: async function () {
        return await Animal.find({});
    },

    create: async function (animalReport) {
        return await Animal.create(animalReport);
    },

    getAnimalByReportStatus: async function (status) {
        return await Animal.find({
            status_report: status
        });
    },

    getById: async function (animalId) {
        return await Animal.findOne({ _id: animalId });
    },

    update: async function (animal_id, name, breed, sex, age, color, weight) {
        const result = await Animal.updateOne(
            { _id: animal_id },
            {
                $set: {
                    name: name,
                    breed: breed,
                    sex: sex,
                    age: age,
                    color: color,
                    weight: weight
                }
            }
        );

        return result;
    },

    delete: async function (animal_id) {
        const result = await Animal.deleteOne({ _id: animal_id });
    }
}

export default AnimalService;