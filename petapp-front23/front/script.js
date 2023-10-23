const url = 'http://localhost:3000/'
function getClients() {
    axios.get(url = '/clients').then(function(result){
        console.log(result)
        const clients = result.data
        const divClients = document.getElementById('div-clients')
        for(let client of clients){
            const p = document.createElement('p')
            p.innerHTML = client.name +', ' + client.document
            divClients.append(p) 
        }

    })

}