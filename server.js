const express = require('express');
const socket = require('socket.io');
const {Server} = require('socket.io');
const app = express();
const port = 4000;

app.use(express.static('public'));


express_server=app.listen(port,()=>{
    console.log(`the server is running on ${port}`);
})

const io = new Server(express_server,{
    cors: {
        origin: "http://localhost:4000",
        methods: ["GET", "POST"],
    }
})



io.on('connect',soc=>{
    soc.on('message_from_the_client_to_the_server',mess=>{
        io.emit('server_to_clients',mess);
    })
})

