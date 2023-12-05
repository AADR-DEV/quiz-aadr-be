import * as express from "express";
import PaymentController from "../controllers/PaymentController";

const router = express.Router();

router.post("/process-transaction", PaymentController.payment);
router.post("/notification", PaymentController.callback);
router.patch("/notification", PaymentController.callback);

export default router;
