import express from 'express';
import { Server } from 'socket.io';
import type { User } from './types';

const PORT = process.env.PORT || 5001;

const app = express();

const expressServer = app.listen(PORT, () => {
  console.log(`Socket server running on port ${PORT}`);
});

const io = new Server(expressServer, {
  cors: {
    origin:
      process.env.NODE_ENV === 'production'
        ? false
        : ['http://localhost:5001', 'http://127.0.0.1:5001'],
  },
});

const priorityRoom: User[] = [];

io.on('connection', socket => {
  socket.emit('message', `${socket.id} has been connected`);

  // Enter room
  socket.on('enter', (userPayload: User) => {
    const rooms = io.sockets.adapter.rooms;
    const currentRoom = rooms.get(userPayload.room);

    console.log(currentRoom);

    if (priorityRoom.length < 3) {
      socket.join(userPayload.room);

      // priorityRoom.push(userPayload);

      socket
        .to(userPayload.room)
        .emit('message', `${userPayload.name} has joined`);

      io.to(userPayload.room).emit(
        'message',
        `Total Player in the room ${}`,
      );
    } else {
      io.to(userPayload.room).emit(
        'message',
        'All players have joined the room',
      );

      // socket.emit('message', `You cannot join the room`);
    }
  });
});
