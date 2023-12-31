import HttpException from '../exceptions/httpException';
import { prisma } from '../lib/prisma';
import type { OAuthPayload } from '../types';

export const authSessionService = async (payload: OAuthPayload) => {
  const { name, username, email, mainAvatar } = payload;

  let result = await prisma.user.findUnique({
    where: {
      email,
      username,
    },
  });

  if (!result) {
    result = await prisma.user.create({
      data: {
        name,
        username,
        email,
        mainAvatar,
      },
    });
  }

  return result;
};

export const authUserLeaderboardService = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      username: true,
      mainAvatar: true,
    },
  });

  return result;
};

export const authUserService = async (payload: string) => {
  const result = await prisma.user.findUnique({
    where: {
      email: payload,
    },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      mainAvatar: true,
      avatars: {
        select: {
          avatarCategory: true,
        },
      },
      diamonds: {
        select: {
          diamondCategory: true,
        },
      },
    },
  });

  if (!result) throw new HttpException(404, 'User not found');

  return result;
};

export const authUserUpdateService = async (
  payload: Partial<Pick<OAuthPayload, 'username' | 'mainAvatar'>>,
  params: string,
) => {
  const toUpdate = await prisma.user.findUnique({
    where: {
      email: params,
    },
  });

  if (!toUpdate) throw new HttpException(404, 'User not found');

  const result = await prisma.user.update({
    where: { email: params },
    data: {
      username: payload.username,
      mainAvatar: payload.mainAvatar,
    },
  });

  return result;
};
