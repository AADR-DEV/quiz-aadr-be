import type { Socket } from 'socket.io';
import type { Player, UserAnswer, UserScore } from '../types';
import type { Server } from 'socket.io';

// CD
export let COUNTDOWN = 30;

// Player data
export let players: Player[] = [];
export let playerScore: UserScore[] = [];

// Room
export const currentPlayerRoom = players.map(player => player.room);

export const startCountdown = (socket: Socket) => {
  socket.emit('countdown', COUNTDOWN);

  const countdownInterval = setInterval(() => {
    COUNTDOWN--;

    socket.emit('countdown', COUNTDOWN);

    if (COUNTDOWN <= 0 || players.length === 3) {
      clearInterval(countdownInterval);
      COUNTDOWN = 30;
    }

    if (COUNTDOWN <= 0 && players.length < 3) {
      clearInterval(countdownInterval);
      players = [];

      socket.emit('message', 'aborted');
    }
  }, 1000);
};

export const addPlayer = (socket: Socket, io: Server, newPlayer: Player) => {
  const { username, avatar, answers } = newPlayer;

  const player: Player = {
    id: socket.id,
    username,
    room: createRoom(socket, io),
    avatar,
    answers,
  };

  players.push(player);
};

export const createRoom = (socket: Socket, io: Server) => {
  const availableRoom = io.sockets.adapter.rooms;

  let roomCount = 0;
  let roomName: string | null = `room-${roomCount}`;

  if (availableRoom.has(roomName)) {
    roomCount++;
    roomName = `room-${roomCount}`;
  }

  socket.join(roomName);

  return roomName;
};

export const storeAnswer = (socket: Socket, answer: UserAnswer, io: Server) => {
  const { userId, questionId, questionAnswer } = answer;

  const player = players.find(player => player.id === socket.id);

  const playerAnswer: UserAnswer = {
    userId,
    questionId,
    questionAnswer,
  };

  player.answers.push(playerAnswer);

  const filteredNullAnswer = player.answers.filter(
    answer => answer.questionAnswer !== '',
  );

  player.answers = filteredNullAnswer;

  io.to(currentPlayerRoom).emit('answer', players);
};

export const storeScore = (socket: Socket, io: Server, result: UserScore) => {
  const { id, username, avatar, points } = result;

  const playerResult: UserScore = {
    id,
    username,
    avatar,
    points,
  };

  playerScore.push(playerResult);

  const sortedResult = playerScore.sort((a, b) => b.points - a.points);

  console.log(sortedResult);
  socket.broadcast.emit('score', sortedResult);
};

export const clearState = (io: Server) => {
  io.sockets.adapter.rooms.clear();
  playerScore = [];
};
