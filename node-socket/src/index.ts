import express from 'express';
import { Server, Socket } from 'socket.io';
import http from 'http';
import { Player, UserAnswer, UserScore } from './types';
import {
  addPlayer,
  // createRoom,
  players,
  startCountdown,
  storeAnswer,
  throwQuestion,
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
    startCountdown(socket);

    if (players.length < MAX_PLAYERS) {
      addPlayer(socket, io, newPlayer);

      socket.broadcast.emit('userList', players);

      if (players.length === MAX_PLAYERS) {
        io.to(players.map(player => player.room)).emit('startGame', true);
        socket.broadcast.emit('userList', players);

        socket.emit('message', `${players.length} players have joined`);
        socket.broadcast.emit(
          'message',
          `${players.length} players have joined`,
        );
      }
    } else {
      console.info(`${newPlayer.username} rejected`);
      socket.emit('message', `Game room is full, cannot join`);
    }
  });

  // Handle question
  socket.on('question', socket => {
    throwQuestion(socket);
  });

  // Handle answer
  socket.on('answer', (userAnswer: UserAnswer) => {
    storeAnswer(socket, userAnswer, io);
  });

  // Handle score
  socket.on('score', (userScore: UserScore) => {
    const playerScore: UserScore[] = [];
    playerScore.push(userScore);

    console.log(playerScore.length);

    socket.emit('score', playerScore);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Socket server running on port ${PORT}`);
});
