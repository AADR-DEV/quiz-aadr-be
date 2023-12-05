import { PrismaClient } from '@prisma/client';

import { NODE_ENV } from '../config/environments';

export const prisma = new PrismaClient({
  log: NODE_ENV === 'dev' ? ['query'] : [],
});
