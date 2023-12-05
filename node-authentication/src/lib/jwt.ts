import jwt from 'jsonwebtoken';

import { JWT_EXPIRATION_TIME, JWT_SECRET } from '../config/environments';
import type { OAuthPayload } from '../types';

export const jwtSign = ({ id }: Pick<OAuthPayload, 'id'>) => {
  const accessToken = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRATION_TIME,
  });

  return accessToken;
};

export const jwtVerify = (token: string): string => {
  const verifyToken = jwt.verify(token, JWT_SECRET) as string;
  return verifyToken;
};
