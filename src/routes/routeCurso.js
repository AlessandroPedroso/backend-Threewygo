import { Router } from 'express';
import CursoController from '../app/controllers/CursoController';

const routeCurso = Router();

routeCurso.get('/', CursoController.index);
routeCurso.post('/', CursoController.store);
routeCurso.put('/:id', CursoController.update);
routeCurso.delete('/:id', CursoController.delete);

export default routeCurso;
