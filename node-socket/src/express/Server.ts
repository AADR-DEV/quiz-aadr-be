import express from 'express';
import { Express } from 'express-serve';
import http from 'http';
import ServerIO from '../socket/ServerIO';
import cors from 'cors';

interface WorkerTask {
  run(): void;
}

class Server implements WorkerTask {
  private readonly backend: Express;
  private readonly server: http.Server;
  private readonly io: ServerIO;

  constructor() {
    this.backend = express();

    this.backend.use(cors()); //Allow CORS requests

    //TODO: Add routes and middlewares
    // this.backend.use('/', BaseRoutes);

    this.server = http.createServer(this.backend);

    this.io = new ServerIO(this.server);
  }

  run() {
    this.server.listen('5001', () => {
      console.info(`Server started on http://${address}:${port}`);
    });
  }
}

export default Server;
