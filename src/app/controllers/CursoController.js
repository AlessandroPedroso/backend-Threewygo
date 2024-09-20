// /**
// * store => Cadastrar / Adicionar
// * index => Listar vários
// * show => listar apenas um
// * update => Atualizar
// * delete => Deletar
//  */

import { CursoService } from '../service/curso.service.js';

const service = new CursoService();
class CursoController {
  async store(request, response) {
    const result = await service.create(request, response);

    //retorna o erro da verificação da dataTermino
    if (result.error) {
      return response.status(400).json({ message: result.error });
    }

    return response.status(201).json({ message: result.message });
  }

  async update(request, response) {
    const result = await service.update(request, response);

    //retorna o erro da verificação da dataTermino
    if (result.error) {
      return response.status(400).json({ message: result.error });
    }

    return response.status(200).json(result);
  }

  async index(request, response) {
    const result = await service.list();

    if (result.error) {
      return response.status(400).json({ message: result.error });
    }

    return response.status(200).json(result);
  }

  async delete(request, response) {
    const result = await service.delete(request);

    if (result.error) {
      return response.status(400).json({ message: result.error });
    }

    return response.status(200).json({ message: result.message });
  }
}

export default new CursoController();
