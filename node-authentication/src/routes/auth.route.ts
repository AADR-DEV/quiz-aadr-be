import { Router } from 'express';

import {
  authUserController,
  authSessionController,
  authUserUpdateController,
  authAllUserController,
} from '../controllers';

const router = Router();

router.post('/auth/store', authSessionController);
router.get('/auth/users', authAllUserController);
router.get('/auth/user/:email', authUserController);
router.patch('/auth/user/:email', authUserUpdateController);

export default router;
