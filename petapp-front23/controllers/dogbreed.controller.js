import breeds from "../models/dogbreeds.model.js"

function getAny (request, response){
    const i = Math.floor(Math.random() * breeds.length)
    response.send(breeds[i])
}
function getByPk (request, response){
    const i = request.params.id
    response.send(breeds[i])
}

export default { getAny, getByPk }