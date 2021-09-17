
const Cliente = require('../Models/Cliente')

class ClienteController {
    index(req, res){
        const clientes = Cliente.findAll();
        return res.json(clientes)
    }

    store(req, res){
        const novoCliente = req.body;
        const clienteCriado = Cliente.create(novoCliente)

        if(clienteCriado){
            return res.status(201).json(clienteCriado)
        }else{
            return res.status(500).json({ mensagem: "erro interno"})
        }
    }

    show(req, res){
        const id = req.params.id;

        const cliente = Cliente.find(id)

        if(cliente){
            return res.status(200).json(cliente)
        }else{
            return res.status(500).json({mensagem: "erro a buscar dados"})
        }
    }
}

module.exports = new ClienteController();