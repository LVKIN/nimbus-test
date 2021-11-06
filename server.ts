import express from 'express';
import index from './src/backend/routes/routes';
import { createServer } from 'http';
import { Socket, Server } from 'socket.io';

const app = express();
app.use(index);

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: false
      },
});

io.on('connection', (socket: Socket) => {
    console.log(`Connection has been success: ${socket.id}`);
    getApiAndEmit(socket);

    io.on('disconnect', () => {
        console.log('WebSocket disconnected')
    });
});

const getApiAndEmit = (socket: Socket) => {
    const response = '123';
    socket.emit('FromAPI', response);
};

httpServer.listen(4001, () => console.log('Running...'));