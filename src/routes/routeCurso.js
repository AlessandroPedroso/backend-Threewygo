import { Router } from 'express';
import CursoController from '../app/controllers/CursoController';

const routeCurso = Router();

routeCurso.post('/', CursoController.store);

export default routeCurso;
