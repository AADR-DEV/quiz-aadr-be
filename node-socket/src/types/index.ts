import { Socket } from 'socket.io';

export type UserAnswer = {
  questionId: string;
  questionAnswer: string;
};

export type Player = {
  id: string;
  username: string;
  avatar: string;
  points?: number;
  answers?: UserAnswer[];
};

export type Room = {
  sockets: Set<Socket>;
};
