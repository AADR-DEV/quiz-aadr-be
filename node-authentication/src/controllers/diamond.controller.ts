import type { NextFunction, Request, Response } from 'express';
import type { DiamondPurcahsePayload, RedisResponse } from '../types';
import { diamondCategoryService, diamondPurchaseService } from '../services';
import redis, { createRedisKey } from '../lib/redis';

export const diamondPurchaseController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: DiamondPurcahsePayload = req.body;
    const { user } = await diamondPurchaseService(
      data as DiamondPurcahsePayload,
    );

    const { id, createdAt, diamondCategory } = user.diamonds[0];

    const USER_REDIS_KEY = createRedisKey(user.username);
    const redisResponse: RedisResponse = await redis.get(USER_REDIS_KEY);

    let total_diamonds: number = redisResponse
      ? redisResponse.total_diamonds
      : 0;
    let total_spent: number = redisResponse ? redisResponse.total_spent : 0;

    const getAmountOfDiamondsFromEveryPurchase =
      user.diamonds && user.diamonds[0].diamondCategory.amount;

    const getAmountOfSpentFromEveryPurchase =
      user.diamonds &&
      user.diamonds
        .map(diamond => diamond.diamondCategory.amount)
        .reduce((acc, curr) => acc + curr);

    if (!redisResponse && user.diamonds.length > 0) {
      total_diamonds = getAmountOfDiamondsFromEveryPurchase;
      total_spent = getAmountOfSpentFromEveryPurchase;
    } else {
      total_diamonds += getAmountOfDiamondsFromEveryPurchase;
      total_spent = getAmountOfSpentFromEveryPurchase;
    }

    await redis.set(USER_REDIS_KEY, {
      total_diamonds,
      total_spent,
    });

    res.status(201).json({
      id,
      createdAt,
      diamondCategory,
      total_diamonds,
      total_spent,
      message: 'Diamond successfully purchased',
    });
  } catch (error) {
    next(error);
  }
};

export const diamondCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await diamondCategoryService();

    res.status(201).json({
      data,
      message: 'List of diamond category',
    });
  } catch (error) {
    next(error);
  }
};
