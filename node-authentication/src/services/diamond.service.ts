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
            where: {
              diamondCategoryId,
            },
            include: {
              diamond_category: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return result;
};
