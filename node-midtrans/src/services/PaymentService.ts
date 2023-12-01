import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Payment } from "../entities/Payment";
import { uuid } from "uuidv4";
const midtransClient = require("midtrans-client");
import "dotenv/config";

export default new (class PaymentServices {
	private readonly PaymentRepository: Repository<Payment> =
		AppDataSource.getRepository(Payment);

	async payment(req: Request, res: Response): Promise<Response> {
		try {
			const snap = new midtransClient.Snap({
				isProduction: false,
				serverKey: "SB-Mid-server-_AwolkqSec6NFWOl0VXsVIOg",
				clientKey: "SB-Mid-client-aPM6HKjy9Yc4IQlM",
			});

			const parameter = {
				transaction_details: {
					order_id: uuid(),
					gross_amount: req.body.gross_amount,
				},
				customer_details: {
					first_name: req.body.name,
					email: req.body.email,
				},
			};

			await this.PaymentRepository.save({
				order_id: parameter.transaction_details.order_id,
				name: parameter.customer_details.first_name,
				email: parameter.customer_details.email,
				gross_amount: parameter.transaction_details.gross_amount,
				transaction_status: "pending",
			});

			await snap
				.createTransaction(parameter)
				.then((transaction: any | null) => {
					const dataPayment = {
						response: JSON.stringify(transaction),
					};

					const token = transaction.token;

					return res.status(200).json({
						message: "success",
						dataPayment,
						token,
					});
				});
		} catch (error) {
			return res.status(500).json({
				message: `Internal Server Error`,
			});
		}
	}

	async callback(req: Request, res: Response): Promise<Response> {
		try {
			const data = req.body;
			if (data.transaction_status == "settlement") {
				await this.PaymentRepository.update(
					{
						order_id: data.order_id,
					},
					{
						transaction_status: data.transaction_status,
					}
				);
			}
			return res.status(200).json({
				message: "success",
				data: data,
			});
		} catch (error) {
			return res.status(500).json({
				message: `Internal Server Error`,
			});
		}
	}
})();
