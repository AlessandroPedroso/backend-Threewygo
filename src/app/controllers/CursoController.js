// /**
// * store => Cadastrar / Adicionar
// * index => Listar vários
// * show => listar apenas um
// * update => Atualizar
// * delete => Deletar
//  */
import * as Yup from 'yup';
import { formatDataBanco, verificarData } from '../../utils';
import Curso from '../models/Curso';

class CursoController {
  async store(request, response) {
    const schema = Yup.object({
      titulo: Yup.string().required('Campo obrigatório'),
      descricao: Yup.string().required('Campo obrigatório'),
      dataTermino: Yup.string().required('Campo obrigatório'),
    });

    // verifica campos validados pelo Yup
    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ errors: err.errors });
    }

    const { titulo, descricao, dataTermino } = request.body;

    if (!verificarData(dataTermino)) {
      return response
        .status(400)
        .json({
          message: 'Data termino do curso não pode ser menor que data atual!',
        });
    }

    const curso = {
      titulo,
      descricao,
      data_termino: formatDataBanco(dataTermino),
    };

    await Curso.create(curso);

    return response
      .status(200)
      .json({ message: 'Curso cadastrado com sucesso!' });
  }
}

export default new CursoController();
