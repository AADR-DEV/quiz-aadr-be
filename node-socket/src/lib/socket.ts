import { Socket } from 'socket.io';
import { Player } from '../types';

// Scoring
export const GOOD_ANSWER = 1;
export const BAD_ANSWER = -2;

// CD
export let COUNTDOWN = 30;

export const players: Player[] = [];

export const startCountdown = (socket: Socket) => {
  socket.emit('countdown', COUNTDOWN);

  const countdownInterval = setInterval(() => {
    COUNTDOWN--;

    socket.emit('countdown', COUNTDOWN);

    if (COUNTDOWN <= 0 && players.length === 3) {
      clearInterval(countdownInterval);
      launchGame(socket);
    }
  }, 1000);
};

export const addPlayer = (socket: Socket, newPlayer: Player) => {
  const createPlayer: Player = {
    id: socket.id,
    username: newPlayer.username,
    avatar: newPlayer.avatar,
    points: 0,
    answers: newPlayer.answers,
  };

  players.push(createPlayer);
};

export const launchGame = (socket: Socket) => {
  socket.emit('message', 'The game is going to start!');
  socket.emit('message', players);

  socket.broadcast.emit('message', 'The game is going to start!');
  socket.broadcast.emit('message', players);
};
