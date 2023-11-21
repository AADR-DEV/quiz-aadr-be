import { Router } from 'express';

import {
  authUserController,
  authSessionController,
  authUserUpdateController,
} from '../controllers/index.controller';

const router = Router();

router.post('/auth/store', authSessionController);
router.get('/auth/user/:email', authUserController);
router.patch('/auth/user/:email', authUserUpdateController);

export default router;
