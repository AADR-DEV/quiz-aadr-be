import { Router } from 'express';

import {
  diamondCategoryController,
  diamondPurchaseController,
} from '../controllers';

const router = Router();

router.post('/diamond/purchase', diamondPurchaseController);
router.get('/diamond/category', diamondCategoryController);

export default router;
