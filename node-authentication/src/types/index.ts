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
};
