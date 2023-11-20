import { Router } from 'express';

import { diamondPurchaseController } from '../controllers/index.controller';

const router = Router();

router.post('/diamond/purchase', diamondPurchaseController);

export default router;
