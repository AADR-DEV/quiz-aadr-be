import express from 'express';
import { Server, Socket } from 'socket.io';
import http from 'http';
import { Player, UserAnswer, UserScore } from './types';
import {
  addPlayer,
  currentPlayerRoom,
  players,
  startCountdown,
  storeAnswer,
  storeScore,
} from './lib/socket';

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
    const playerIndex = players.findIndex(player => player.id === socket.id);

    startCountdown(socket, io);

    if (players.length < MAX_PLAYERS) {
      addPlayer(socket, io, newPlayer);

      console.log(`From top players length: ${players.length}`);

      socket.broadcast.emit('userList', players);

      if (players.length === MAX_PLAYERS) {
        io.to(currentPlayerRoom).emit('startGame', true);
        io.to(currentPlayerRoom).emit('userList', players);

        io.to(currentPlayerRoom).emit(
          'message',
          `${players.length} players have joined`,
        );
      }
    } else {
      console.info(`${newPlayer.username} rejected`);

      players.splice(playerIndex, 1);
      io.sockets.adapter.rooms.clear();
    }
  });

  // Handle answer
  socket.on('answer', (userAnswer: UserAnswer) => {
    storeAnswer(socket, userAnswer, io);
  });

  // Handle score
  socket.on('score', (userScore: UserScore) => {
    storeScore(socket, io, userScore);
  });

  //  Handle end game
  socket.on('endGame', (status: boolean) => {
    const playerIndex = players.findIndex(player => player.id === socket.id);
    const playerExist = players.find(player => player.id === socket.id);

    if (!status) {
      return;
    }

    socket.leave(playerExist.room);
    socket._cleanup();
    players.splice(playerIndex, 1);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Socket server running on port ${PORT}`);
});
