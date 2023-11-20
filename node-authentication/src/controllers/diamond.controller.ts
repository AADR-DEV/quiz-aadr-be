import type { NextFunction, Request, Response } from 'express';
import { PurcahsePayload } from '../types';
import { diamondPurchaseService } from '../services/diamond.service';

export const diamondPurchaseController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: PurcahsePayload = req.body;

    const { id, user } = await diamondPurchaseService(data as PurcahsePayload);

    res.status(201).json({
      data: {
        id,
        user,
      },
      message: 'Diamond successfully purchased',
    });
  } catch (error) {
    next(error);
  }
};
