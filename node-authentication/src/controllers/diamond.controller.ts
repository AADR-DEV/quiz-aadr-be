import type { NextFunction, Request, Response } from 'express';
import { PurcahsePayload } from '../types';
import {
  diamondCategoryService,
  diamondPurchaseService,
} from '../services/diamond.service';

export const diamondPurchaseController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: PurcahsePayload = req.body;

    const { user } = await diamondPurchaseService(data as PurcahsePayload);

    const { id, createdAt, diamondCategory } = user.diamonds[0];

    res.status(201).json({
      data: {
        id,
        createdAt,
        diamondCategory,
      },
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
