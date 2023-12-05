export type OAuthPayload = {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
};

export type Player = {
  id: string;
  name: string;
  score: number;
};

export type InGamePlayer = {
  socketId: string;
  player: Player;
};
