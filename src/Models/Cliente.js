const data = [
    {
        id: 1,
        name: "João da silva",
        email: "joao@gmail.com"
    },
    {
        id: 2,
        name: "José santos",
        email: "Jose@gmail.com"
    }
]

class Cliente {
    findAll(){
        return data;
    }

    create(novoCliente){
        data.push(novoCliente)
        return novoCliente;
    }

    find(id){
        return data.find(cli => cli.id == id)
    }

}

module.exports = new Cliente();