import type { NextFunction, Request, Response } from 'express';
import type { AvatarCollectionPayload } from '../types';
import { avatarCategoryService, avatarCollectionService } from '../services';

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

    res.status(201).json({
      id,
      avatarCategory,
      createdAt,
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
