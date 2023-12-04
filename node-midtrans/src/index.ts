import * as express from "express"
import * as cors from "cors"
import "dotenv/config";
import { AppDataSource } from "./data-source";
import bodyParser = require("body-parser");
import router from "./routes";

AppDataSource.initialize()
	.then(async () => {
		const app = express();
		const PORT = 5000;

		app.use(cors());
		app.use(express.json());

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));


        app.use("/api/payment", router)

		app.listen(PORT, () => {
			console.log(`server Running on PORT ${PORT}`);
		});
	})
	.catch((error) => console.log(error));