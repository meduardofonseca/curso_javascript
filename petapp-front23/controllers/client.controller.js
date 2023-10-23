import Client from "../models/client.model.js";

function findAll(request, response) {
    Client.findAll().then(function (results) {
        response.status(200)
        response.json(results)
    }).catch(function (error) {
        console.log(error)
    })
}

function findByPk(request, response) {
    Client.findByPk(request.params.id).then(function (result) {
        res

    }).catch(function (error) {
        console.log(error)
    })
}

function create(request, response) {
    Client.create({
        name: request.body.name,
        document: request.body.document
    }).then(function (result) {
        response.status(201).json(result)
    }).catch(function (error) {
        console.log(error)
    })
}


function deleteByPk(request, response) {
    Client.destroy({ where: { id: request.params.id } }).then(function (result) {
        if (result == 1) {
            response.status(200).send()

        } else {
            response.status(404).send()

        }
    }).catch(function (error) {
        console.log(error)
    })
}

function update(request, response) {
    Client.update({
        name: request.body.name,
        document: request.body.document
    }, { where: { id: request.params.id } }).then(function (result) {
        response.status(200).json(result)

    }).catch(function (error) {
        console.log(error)
    })


}
export default { findAll, findByPk, create, deleteByPk, update } 