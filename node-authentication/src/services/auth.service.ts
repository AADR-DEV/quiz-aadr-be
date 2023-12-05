import HttpException from '../exceptions/httpException';
import { prisma } from '../lib/prisma';
import type { OAuthPayload } from '../types';

export const authSessionService = async (payload: OAuthPayload) => {
  const { name, username, email, avatar } = payload;

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
        avatar,
      },
    });
  }

  return result;
};

export const authUserService = async (payload: string) => {
  const result = await prisma.user.findUnique({
    where: {
      username: payload,
    },
  });

  if (!result) throw new HttpException(404, 'User not found');

  return result;
};

export const authUserUpdateService = async (
  payload: Partial<Pick<OAuthPayload, 'username' | 'avatar'>>,
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
      avatar: payload.avatar,
    },
  });

  return result;
};
