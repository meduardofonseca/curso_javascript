import Client from "./models/client.model.js"
import Pet from "./models/pet.model.js"


await Client.sync()
await Pet.sync()

await Client.create({ name: 'Claudiane Camargo', document: '134.568.963-58' })

Client.findAll().then(function (results) {
    for (let client of results) {
        console.log(client.dataValues)
    }
})

