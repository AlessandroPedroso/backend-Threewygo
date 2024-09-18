import { Router } from 'express';
import { testeRouter } from './routeTest.js';

export const routes = Router();

routes.use('/teste', testeRouter);
