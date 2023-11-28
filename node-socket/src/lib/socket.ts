import type { Socket } from 'socket.io';
import type { Player, UserAnswer } from '../types';
import type { Server } from 'socket.io';

// CD
export let COUNTDOWN = 30;

export let players: Player[] = [];

export const startCountdown = (socket: Socket) => {
  socket.emit('countdown', COUNTDOWN);

  const countdownInterval = setInterval(() => {
    COUNTDOWN--;

    socket.emit('countdown', COUNTDOWN);

    if (COUNTDOWN <= 0 || players.length === 3) {
      clearInterval(countdownInterval);
    }

    if (COUNTDOWN <= 0 && players.length !== 3) {
      clearInterval(countdownInterval);
      players = [];

      socket.emit('message', 'Game is aborted');
    }
  }, 1000);
};

export const addPlayer = (socket: Socket, io: Server, newPlayer: Player) => {
  const player: Player = {
    id: socket.id,
    username: newPlayer.username,
    room: createRoom(socket, io),
    avatar: newPlayer.avatar,
    answers: newPlayer.answers,
  };

  players.push(player);
};

export const createRoom = (socket: Socket, io: Server) => {
  const availableRoom = io.sockets.adapter.rooms;

  let roomCount = 0;
  let roomName: string | null = `room-${roomCount}`;

  if (!availableRoom.has(roomName)) {
    roomCount++;
    roomName = `room-${roomCount}`;

    socket.join(roomName);

    return roomName;
  }
};

export const throwQuestion = (socket: Socket) => {
  socket.emit('question', 'What do you want to do?');
};

export const storeAnswer = (socket: Socket, answer: UserAnswer, io: Server) => {
  let questionCount = 0;

  const { userId, questionId, questionAnswer } = answer;

  const player = players.find(player => player.id === socket.id);

  const playerAnswer: UserAnswer = {
    userId,
    questionId,
    questionAnswer,
  };

  player.answers.push(playerAnswer);
  questionCount++;

  const filteredNullAnswer = player.answers.filter(
    answer => answer.questionAnswer !== '',
  );

  player.answers = filteredNullAnswer;

  io.to(players.map(player => player.room)).emit('answer', players);

  if (questionCount === 5) {
    // socket._cleanup();
    socket.leave(player.room);
  }
};

export const storeScore = () => {};
