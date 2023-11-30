import { Router } from 'express';

import {
  authUserController,
  authSessionController,
  authUserUpdateController,
  authUserLeaderboardController,
} from '../controllers';

const router = Router();

router.post('/auth/store', authSessionController);
router.get('/auth/user/leaderboard', authUserLeaderboardController);
router.get('/auth/user/:email', authUserController);
router.patch('/auth/user/:email', authUserUpdateController);

export default router;
