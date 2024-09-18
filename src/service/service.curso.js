import Curso from '../app/models/Curso';

export class CursoService{
    async create(curso) {
        try {

            await Curso.create(curso);

            return 'Curso cadastrado com sucesso!'
            
        } catch (error) {
            console.error(error)
        }
    }
}