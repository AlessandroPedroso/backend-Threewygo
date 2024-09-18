// /**
// * store => Cadastrar / Adicionar
// * index => Listar vários
// * show => listar apenas um
// * update => Atualizar
// * delete => Deletar
//  */

import { CursoService } from '../service/service.curso';
// import Curso from '../models/Curso';

class CursoController {
  async store(request, response) {
    const service = new CursoService();
    const result = await service.create(request, response);
    // // realiza o cadastro no banco de dados
    return response.status(200).json({ message: result });
  }
}

export default new CursoController();
