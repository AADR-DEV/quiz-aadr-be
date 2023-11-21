import HttpException from '../exceptions/httpException';
import { prisma } from '../lib/prisma';
import type { AvatarCollectionPayload } from '../types';

export const avatarCollectionService = async (
  payload: AvatarCollectionPayload,
) => {
  const { userId, avatarCategoryId } = payload;

  const checkIfAvatarExists = await prisma.user.findUnique({
    where: {
      id: userId,
      avatars: {
        every: {
          avatarCategory: {
            id: avatarCategoryId,
          },
        },
      },
    },
  });

  if (checkIfAvatarExists)
    throw new HttpException(400, 'Avatar already exists');

  const result = await prisma.avatar.create({
    data: {
      userId,
      avatarCategoryId,
    },
    include: {
      user: {
        include: {
          avatars: {
            select: {
              id: true,
              createdAt: true,
              avatarCategory: true,
            },
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      },
    },
  });

  return result;
};

export const avatarCategoryService = async () => {
  const result = await prisma.avatarCategory.findMany({
    orderBy: {
      price: 'desc',
    },
  });

  return result;
};
