import express from 'express';
import { Server, Socket } from 'socket.io';
import http from 'http';
import { Player } from './types';
import { addPlayer, launchGame, players, startCountdown } from './lib/socket';

const PORT = process.env.PORT || 5001;
const MAX_PLAYERS = 3;

const app = express();
const server = http.createServer(app);

app.use(express.json());

export const io = new Server(server, {
  cors: {
    origin:
      process.env.NODE_ENV === 'production'
        ? false
        : ['http://localhost:5001', 'http://127.0.0.1:5001'],
  },
  pingTimeout: 120000,
  pingInterval: 5000,
});

io.on('connection', (socket: Socket) => {
  console.log(`${socket.id} connected`);

  // Register event
  socket.on('message', (message: string) => {
    console.info(message);
  });

  // Handle createPlayer
  socket.on('createPlayer', (newPlayer: Player) => {
    if (players.length < MAX_PLAYERS) {
      addPlayer(socket, newPlayer);

      socket.broadcast.emit('userList', players);

      if (players.length === MAX_PLAYERS) {
        socket.broadcast.emit('userList', players);

        socket.emit('message', `${players.length} players have joined`);

        launchGame(socket);
      }
      startCountdown(socket);
    } else {
      console.info(`${newPlayer.username} rejected`);
      socket.emit('message', `Game room is full, cannot join`);
      socket.disconnect();
    }
  }),
    // Handle disconnect
    socket.on('disconnect', () => {
      console.log(`${socket.id} disconnected`);
    });
});

server.listen(PORT, () => {
  console.log(`Socket server running on port ${PORT}`);
});
