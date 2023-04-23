import Animal from "../models/animalModel.js";

const AnimalService = {
    getAll: async function () {
        return await Animal.find({});
    },

    create: async function (animalReport) {
        return await Animal.create(animalReport);
    },

    getAnimalByReportStatus: async function (status, tokenId) {
        return await Animal.find({
            status_report: status,
            user_id: tokenId
        }) .sort({updatedAt: 1});
    },

    getById: async function (animalId, tokenId) {
        return await Animal.findOne({ _id: animalId, user_id: tokenId });
    },

    update: async function (tokenId, animal_id, name, breed, sex, age, color, weight) {
        const result = await Animal.updateOne(
            { _id: animal_id, user_id: tokenId },
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

    delete: async function (tokenId, animal_id) {
        return await Animal.deleteOne({ _id: animal_id, user_id: tokenId });
    }
}

export default AnimalService;