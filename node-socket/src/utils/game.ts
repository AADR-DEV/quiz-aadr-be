import { format } from 'date-fns';
import { Player, getPlayersByRoom } from './player';
import fetch from 'node-fetch';

interface GameProps {
  event: string;
  playerId: string;
  answer: string;
  room: string;
}

type Result = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type Question = {
  response_code: number;
  results: Result[];
};

const game = {
  prompt: {
    answers: '',
    question: '',
    createdAt: '',
  },
  status: {
    submissions: {},
    correctAnswer: '',
    isRoundOver: false,
  },
};

export let noOfQuestions: number = 0;

export class Game {
  private event: string;
  private playerId: string;
  private answer: string;
  private room: string;

  constructor({ event, playerId, answer, room }: GameProps) {
    this.event = event;
    this.playerId = playerId;
    if (answer) {
      this.answer = answer;
    }
    this.room = room;
  }

  getGameStatus() {
    const { correctAnswer, isRoundOver, submissions } = game.status;

    if (this.event === 'getAnswer' && isRoundOver) {
      return { correctAnswer, submissions };
    }
  }

  setGameStatus() {
    if (this.event === 'sendAnswer') {
      const { submissions } = game.status;

      if (!submissions[`${this.playerId}`]) {
        submissions[`${this.playerId}`] = this.answer;
      }

      const playersByRoom: Player[] = getPlayersByRoom(this.room) as Player[];

      game.status.isRoundOver =
        Object.keys(submissions).length === playersByRoom.length;
    }
    const status = game.status;
    return status;
  }
}

export const setGame = async () => {
  try {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=1&category=18',
    );

    const data: Question = (await response.json()) as Question;

    const { correct_answer, incorrect_answers, question } = data.results[0];

    game.status.submissions = {};
    game.status.correctAnswer = correct_answer;
    game.prompt = {
      answers: shuffle([correct_answer, ...incorrect_answers]),
      question,
      createdAt: format(new Date(), 'hh:mm a'),
    };
    noOfQuestions += 1;

    return { noOfQuestions, game };
  } catch (error) {
    console.log(error);
  }
};

// Shuffles an array.
const shuffle = array => {
  for (let end = array.length - 1; end > 0; end--) {
    const random = Math.floor(Math.random() * (end + 1));
    [array[end], array[random]] = [array[random], array[end]];
  }
  return array;
};

export const getGameAnswerOptions = () => {
  return game.prompt.answers;
};
