import { Router } from 'express';
import multer from 'multer';
import CursoController from '../app/controllers/CursoController';
import multerConfig from '../config/multer.js';

const uploads = multer(multerConfig);
const routeCurso = Router();

routeCurso.get('/', CursoController.index);
routeCurso.post('/', uploads.single('file'), CursoController.store);
routeCurso.put('/:id', uploads.single('file'), CursoController.update);
routeCurso.delete('/:id', CursoController.delete);

export default routeCurso;
