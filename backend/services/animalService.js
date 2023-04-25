import Animal from "../models/animalModel.js";

const AnimalService = {
    searchAnimal: async function (category, sex, animalStatus) {
        return await Animal.find({
            category: category,
            sex: sex,
            status_animal: animalStatus
        }).sort({ updatedAt: 1 });
    },

    getAll: async function () {
        return await Animal.find({});
    },

    create: async function (animalReport) {
        const animalId = animalReport._id;
        const userId = animalReport.user_id;
        const animal = await this.getById(animalId, userId);

        if (animal) {
            const adopted_user = animalReport.adopted_user;
            return await Animal.updateOne(
                { _id: animalId, user_id: userId },
                {
                    $set: {
                        adopt_date: animalReport.adopt_date,
                        found_date: animalReport.found_date,
                        loss_date: animalReport.loss_date,
                        name: animalReport.name,
                        breed: animalReport.breed,
                        sex: animalReport.sex,
                        age: animalReport.age,
                        color: animalReport.color,
                        weight: animalReport.weight,
                        status_report: animalReport.status_report,
                        status_animal: animalReport.status_animal,
                        adopted_user: adopted_user
                    }
                }
            );
        } else {
            return await Animal.create(animalReport);
        }
    },

    getAnimalByReportStatus: async function (status, tokenId) {
        return await Animal.find({
            status_report: status,
            user_id: tokenId
        }).sort({ updatedAt: 1 });
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