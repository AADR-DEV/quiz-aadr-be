import type { NextFunction, Request, Response } from 'express';
import redis, { createRedisKey } from '../lib/redis';

import {
  authAllUserService,
  authSessionService,
  authUserService,
  authUserUpdateService,
} from '../services';
import type {
  OAuthPayload,
  RedisResponse,
  UserConvertingResponse,
} from '../types';

export const authSessionController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: OAuthPayload = req.body;

    const { id, name, username, email, mainAvatar } = await authSessionService(
      data as OAuthPayload,
    );

    res.status(201).json({
      id,
      name,
      username,
      email,
      mainAvatar,
      message: 'Create user data successful',
    });
  } catch (error) {
    next(error);
  }
};

export const authAllUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await authAllUserService();
    const convertUsersResponse: UserConvertingResponse[] = [];

    const total_diamonds: number = 0;
    const total_spent: number = 0;

    users.forEach(user => {
      convertUsersResponse.push({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        mainAvatar: user.mainAvatar,
        avatars: user.avatars.map(avatar => avatar.avatarCategory),
        diamonds: user.diamonds.map(diamond => diamond.diamondCategory),
        total_diamonds,
        total_spent,
      });
    });

    for (const user of convertUsersResponse) {
      const USER_REDIS_KEY = createRedisKey(user.username);
      const redisResponse: RedisResponse = await redis.get(USER_REDIS_KEY);

      user.total_diamonds +=
        redisResponse === null ? 0 : redisResponse.total_diamonds;

      user.total_spent +=
        redisResponse === null ? 0 : redisResponse.total_spent;
    }

    res.status(200).json({
      data: convertUsersResponse,
      message: 'User successfully authenticated',
    });
  } catch (error) {
    next(error);
  }
};

export const authUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.params.email;

    const { id, name, username, email, mainAvatar, diamonds, avatars } =
      await authUserService(data as string);

    const convertAvatarResponse = avatars.map(avatar => avatar.avatarCategory);
    const convertDiamondResponse = diamonds.map(
      diamond => diamond.diamondCategory,
    );

    let total_diamonds: number;
    let total_spent: number;

    if (convertDiamondResponse.length > 0) {
      const USER_REDIS_KEY = createRedisKey(username);

      const { total_diamonds: diamonds, total_spent: spent }: RedisResponse =
        await redis.get(USER_REDIS_KEY);

      total_diamonds = diamonds;
      total_spent = spent;
    }

    res.status(200).json({
      id,
      name,
      username,
      email,
      mainAvatar,
      avatars: convertAvatarResponse,
      diamonds: convertDiamondResponse,
      total_diamonds,
      total_spent,
      message: 'User successfully authenticated',
    });
  } catch (error) {
    next(error);
  }
};

export const authUserUpdateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const params = req.params.email;
    const data = req.body;

    await authUserUpdateService(data, params as string);

    res.status(200).json({
      message: 'User successfully updated',
    });
  } catch (error) {
    next(error);
  }
};
