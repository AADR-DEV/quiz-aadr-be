import { Socket } from 'socket.io';

export type UserAnswer = {
  userId?: string;
  questionId: string;
  questionAnswer: string;
};

export type UserScore = {
  id: string;
  username: string;
  points: number;
  avatar: string;
};

export type Player = {
  id: string;
  username: string;
  room?: string;
  avatar: string;
  answers?: UserAnswer[];
};

export type Room = {
  sockets: Set<Socket>;
};
