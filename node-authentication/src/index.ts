import express from 'express';
import routers from './routes/index.route';
import { NODE_PORT } from './config/environments';
import cors from 'cors';

const app = express();

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routers.authRoute, routers.diamondRoute);

app.listen(NODE_PORT || 5000, () => {
  console.log(`Authentication server running on port ${NODE_PORT}`);
});
