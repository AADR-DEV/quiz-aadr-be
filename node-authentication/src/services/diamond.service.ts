import { prisma } from '../lib/prisma';
import type { DiamondPurcahsePayload } from '../types';

export const diamondPurchaseService = async (
  payload: DiamondPurcahsePayload,
) => {
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
  const result = await prisma.diamondCategory.findMany({
    orderBy: {
      price: 'desc',
    },
  });

  return result;
};
