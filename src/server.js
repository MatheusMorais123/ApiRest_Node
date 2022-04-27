
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')

//const socketio = require('socket.io')
const http = require('http')

const routes = require('./routes')

const app = express();
const server = http.Server(app)
//const io = socketio(server)

mongoose.connect('mongodb+srv://matheus:123@cliente.rj3ze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(cors())
app.use(express.json());

app.use(routes);

server.listen(3333);




