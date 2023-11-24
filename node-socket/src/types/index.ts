export type UserAnswer = {
  questionId: string;
  questionAnswer: string;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
  room: string;
  answers?: UserAnswer[];
};

export type UsersState = {
  users: User[];
  setUsers: (newUsersArray: User[]) => void;
};
