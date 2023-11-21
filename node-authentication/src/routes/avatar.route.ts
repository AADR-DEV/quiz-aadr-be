import { Router } from 'express';

import {
  avatarCategoryController,
  avatarCollectionController,
} from '../controllers';

const router = Router();

router.post('/avatar/collection', avatarCollectionController);
router.get('/avatar/category', avatarCategoryController);

export default router;
