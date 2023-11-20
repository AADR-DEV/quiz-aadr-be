import type { NextFunction, Request, Response } from 'express';

import {
  authSessionService,
  authUserService,
  authUserUpdateService,
} from '../services/index.service';
import { OAuthPayload } from '../types';

export const authSessionController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: OAuthPayload = req.body;

    const { id, name, username, email, avatar } = await authSessionService(
      data as OAuthPayload,
    );

    res.status(201).json({
      data: {
        id,
        name,
        username,
        email,
        avatar,
      },
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

    const { id, name, username, email, avatar, diamonds } =
      await authUserService(data as string);

    res.status(200).json({
      id,
      name,
      username,
      email,
      avatar,
      diamonds,
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
