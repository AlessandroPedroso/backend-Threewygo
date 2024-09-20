import { Router } from 'express';

import multer from 'multer';
import VideoCursoController from '../app/controllers/VideoCursoController';
import multerConfig from '../config/multer.js';

const uploads = multer(multerConfig);

export const routeVideoCurso = Router();

routeVideoCurso.post('/', uploads.single('file'), VideoCursoController.store);
