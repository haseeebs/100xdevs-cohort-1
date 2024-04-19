const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
});

io.on('connection', (socket) => {
    socket.on('chat messages', (message) => {
        io.emit('chat messages', message);
    });
});

server.listen(3000, () => {
    console.log(`It's listning on port ${3000}`);
});