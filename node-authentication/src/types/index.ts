export type OAuthPayload = {
  id: string;
  name: string;
  username: string;
  email: string;
  mainAvatar?: string;
  avatars: AvatarCollectionPayload;
};

export type DiamondPurcahsePayload = {
  userId: string;
  diamondCategoryId: string;
};

export type AvatarCollectionPayload = {
  userId: string;
  avatarCategoryId: string;
  price?: number;
};

export type RedisResponse = {
  total_diamonds: number;
  total_spent: number;
};

export type AvatarCategoryPayload = {
  id: string;
  name: string;
  price: number;
  url: string;
  type: string;
};

export type DiamondCategoryPayload = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

export type UserConvertingResponse = {
  id: string;
  name: string;
  username: string;
  mainAvatar?: string;
  total_diamonds?: number;
  total_spent?: number;
};
