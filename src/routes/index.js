import { Router } from 'express';
import routeCurso from './routeCurso.js';
import { testeRouter } from './routeTest.js';
import { routeVideoCurso } from './routeVideoCurso.js';

export const routes = Router();

routes.use('/teste', testeRouter);
routes.use('/curso', routeCurso);
routes.use('/videoCurso', routeVideoCurso);
