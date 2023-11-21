import { prisma } from '../lib/prisma';
import { PurcahsePayload } from '../types';

export const diamondPurchaseService = async (payload: PurcahsePayload) => {
  const { userId, diamondCategoryId } = payload;

  const result = await prisma.diamond.create({
    data: {
      userId,
      diamondCategoryId,
    },
    include: {
      user: {
        include: {
          diamonds: {
            select: {
              id: true,
              createdAt: true,
              diamondCategory: true,
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

export const diamondCategoryService = async () => {
  const result = await prisma.diamondCategory.findMany();

  return result;
};
