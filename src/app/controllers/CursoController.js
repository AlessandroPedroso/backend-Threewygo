// /**
// * store => Cadastrar / Adicionar
// * index => Listar vários
// * show => listar apenas um
// * update => Atualizar
// * delete => Deletar
//  */
import * as Yup from 'yup';

class CursoController {
  async store(request, response) {
    const schema = Yup.object({
      titulo: Yup.string().required('Campo obrigatório'),
      descricao: Yup.string().required('Campo obrigatório'),
      ativo: Yup.bool().required('Campo obrigatório'),
      dataTermino: Yup.date().required('Campo obrigatório'),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ errors: err.errors });
    }
  }
}

export default new CursoController();
