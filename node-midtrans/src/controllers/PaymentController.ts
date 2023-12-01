import { Request, Response } from "express";
import PaymentService from "../services/PaymentService";

export default new (class PaymentController {
	payment(req: Request, res: Response) {
		PaymentService.payment(req, res);
	}

	callback(req: Request, res: Response) {
		PaymentService.callback(req, res);
	}
})();
