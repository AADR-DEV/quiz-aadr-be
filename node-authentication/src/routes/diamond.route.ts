import { Router } from 'express';

import {
  diamondCategoryController,
  diamondPurchaseController,
} from '../controllers/index.controller';

const router = Router();

router.post('/diamond/purchase', diamondPurchaseController);
router.get('/diamond/category', diamondCategoryController);

export default router;
