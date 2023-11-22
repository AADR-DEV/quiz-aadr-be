import type { NextFunction, Request, Response } from 'express';

import {
  authSessionService,
  authUserService,
  authUserUpdateService,
} from '../services';
import { OAuthPayload } from '../types';

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

    let total_diamonds: number = 0;
    let total_spent: number = 0;

    if (diamonds.length > 0) {
      const getAmountFromEveryPurchase = diamonds.map(
        diamond => diamond.diamondCategory.amount,
      );

      const getPriceFromEveryPurchase = diamonds.map(
        diamond => diamond.diamondCategory.price,
      );

      total_diamonds = getAmountFromEveryPurchase.reduce(
        (acc, curr) => acc + curr,
      );

      total_spent = getPriceFromEveryPurchase.reduce((acc, curr) => acc + curr);
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
