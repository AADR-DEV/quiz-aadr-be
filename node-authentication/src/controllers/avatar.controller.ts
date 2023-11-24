import type { NextFunction, Request, Response } from 'express';
import type { AvatarCollectionPayload, RedisResponse } from '../types';
import { avatarCategoryService, avatarCollectionService } from '../services';
import redis, { createRedisKey } from '../lib/redis';

export const avatarCollectionController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: AvatarCollectionPayload = req.body;

    const { user } = await avatarCollectionService(
      data as AvatarCollectionPayload,
    );

    const { id, createdAt, avatarCategory } = user.avatars[0];

    const USER_REDIS_KEY = createRedisKey(user.username);
    let { total_diamonds, total_spent }: RedisResponse =
      await redis.get(USER_REDIS_KEY);

    const avatarPrice = avatarCategory.price;

    if (avatarPrice > 0) {
      total_diamonds -= avatarPrice;
      total_spent = total_spent;

      await redis.set(USER_REDIS_KEY, { total_diamonds, total_spent });
    }

    res.status(201).json({
      id,
      avatarCategory,
      createdAt,
      total_diamonds,
      message: 'Avatar successfully collected',
    });
  } catch (error) {
    next(error);
  }
};

export const avatarCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await avatarCategoryService();

    res.status(201).json({
      data,
      message: 'List of avatar category',
    });
  } catch (error) {
    next(error);
  }
};
