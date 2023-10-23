import Pet from "../models/pet.model.js";

function findAll(request, response) {
    Pet.findAll().then(function (results) {
        response.status(200)
        response.json(results)
    }).catch(function (error) {
        console.log(error)
    })
}

function create(request, response) {
    Pet.create({
        name: request.body.name,
        type: request.body.type,
        breed: request.body.breed,
        birth : request.body.birth
    }).then(function (result) {
        response.status(201).json(result)
    }).catch(function (error) {
        console.log(error)
    })
}

function findPetByClients(request, response){
    Pet.findAll({where : { ClientId: request.params.ClientId}})
        .then(function(response){
            response.status(200).json(results)
        }).catch(function (error) {
            console.log(error)
        })


}

export default { findAll, create, findPetByClients }