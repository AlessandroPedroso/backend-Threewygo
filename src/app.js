import express, { json } from 'express';
import { routes } from './routes/index.js';
import './database/index.js';
import { resolve } from 'node:path';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(json());
    //referencia da imagem para ser guardada e depois consumida
    this.app.use(
      '/video-file',
      express.static(resolve(__dirname, '..', 'upload')),
    );
    this.app.use(
      '/curso-file',
      express.static(resolve(__dirname, '..', 'upload')),
    );
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
