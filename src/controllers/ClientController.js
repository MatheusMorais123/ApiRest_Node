
const Client = require('../models/Client');
module.exports ={

    async index(req, res) {
        const clients = await Client.find().sort('-createdAt');

        return res.json(clients);
    },
     async store(req, res){
      const {name,value, status} = req.body;

      if(!name){
        return res.status(400).json({ error: 'Nome já cadastrado'});
      }

      const client = await Client.create({
        name,
        value,
        status
      })
      return res.json({client}) 
  },
  async delete(req, res) {


    await Client.deleteOne({ _id: req.params.id }, (err) => {

        if (err) return res.status(400).json({
            error: true,
            message: "Error: Ao deletar"
        });


        return res.json({
            error: false,
            message: "Usuário deletado"
        });
    });

  },
};