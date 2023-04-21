import ReportAnimal from "../models/reportAnimalModel.js"

const AnimalService = {
    getAll: async function() {
        return await ReportAnimal.find({});
    },
    create: async function(animalReport) {
        return await ReportAnimal.create(animalReport);
    },
    getAnimalByReportStatus: async function(status) {
      return await ReportAnimal.find({status_report: status });
    },
    getById: async function (id) {
        return await ReportAnimal.findOne({_id: id});
    },
    update: async function(id, new_animalReport) {
        return await  ReportAnimal.updateOne(
            {_id: id},
            {$set: { _id: id, Animal: new_animalReport } }
        );
    },
    delete: async function(id){
        return await ReportAnimal.deleteOne({_id: id});
    }
}

export default AnimalService;