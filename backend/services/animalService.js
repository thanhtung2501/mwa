import Animal from "../models/animal.js";
import {STATUS_REPORT} from "../models/reportAnimalModel.js";

const AnimalService = {
    getAll: async function() {
        return await Animal.find({});
    },
    create: async function(animal) {
        return await Animal.create(animal);
    },
    getAnimalByReportStatus: async function(status) {
      return await Animal.find({status_report: status });
    },
    getById: async function (id) {
        return await Animal.findOne({_id: id});
    },
    update: async function(id, new_animal) {
        return await  Animal.updateOne(
            {_id: id},
            {$set: { _id: animal_id, Animal: updated_animal } }
        );
    },
    delete: async function(id){
        return await Animal.deleteOne({_id: id});
    }
}

export default AnimalService;