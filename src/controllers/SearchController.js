const Client = require('../models/Client');

module.exports = {
    async index(request, response) {

        const name = request.query.name
        const client = await Client.find({ name })

        return response.json(client);
    }
};