import { QueryTypes, Sequelize } from 'sequelize';
import * as Yup from 'yup';
import config from '../../config/database.js';
import { formatDataBanco, verificarData } from '../../utils';
import Curso from '../models/Curso';

const sequelize = new Sequelize(config);
export class CursoService {
  async create(request, response) {
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

    // pega as informações do body
    const { titulo, descricao, dataTermino } = request.body;

    //faz a verificação da data termino em relação a data atual
    const dataInvalida = this._verificacaoDataTermino(dataTermino);

    //caso a data esteja inválida retorna para o controller o erro
    if (dataInvalida) {
      return {
        error: 'Data termino do curso não pode ser menor que data atual!',
      };
    }

    // prepara as informações em um objeto para ser enviado para o banco de dados
    const curso = {
      titulo,
      descricao,
      data_termino: formatDataBanco(dataTermino),
    };

    // cadastra o curso
    await Curso.create(curso);

    return { message: 'Curso cadastrado com sucesso!' };
  }

  async update(request, response) {
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

    // pega as informações da query
    const { id } = request.params;

    // utilizando QUERY SQL
    const [result] = await sequelize.query(
      'SELECT * FROM curso where id = :id',
      {
        replacements: { id: id },
        type: QueryTypes.SELECT,
      },
    );

    //verifica se o curso existe
    if (!result) {
      return { error: 'Curso não encontrado!' };
    }

    // pega as informações do body
    const { titulo, descricao, dataTermino } = request.body;

    //faz a verificação da data termino em relação a data atual
    const dataInvalida = this._verificacaoDataTermino(dataTermino);

    if (dataInvalida) {
      //caso a data esteja inválida retorna para o controller o erro
      return {
        error: 'Data termino do curso não pode ser menor que data atual!',
      };
    }

    // QUERY DE UPDATE DO CURSO
    await sequelize.query(
      'UPDATE curso SET titulo = :titulo, descricao = :descricao, data_termino = :dataTermino where id = :id ',
      {
        replacements: {
          titulo: titulo,
          descricao: descricao,
          dataTermino: formatDataBanco(dataTermino),
          id: id,
        },
        type: QueryTypes.UPDATE,
      },
    );

    return { message: 'Curso alterado com sucesso!' };
  }

  // busca os cursos ativo maior ou igual a data atual
  async list() {
    const result = await sequelize.query(
      'SELECT * FROM curso where data_termino >= CURRENT_DATE',
      {
        type: QueryTypes.SELECT,
      },
    );

    if (!result) {
      return { error: 'Cursos não encontrados!' };
    }

    return result;
  }

  async delete(request) {
    const { id } = request.params;
    const result = await Curso.findByPk(id);

    if (!result) {
      return { error: 'Curso não encontrado!' };
    }

    await Curso.destroy({ where: { id: id } });

    return { message: 'Curso Deletado!' };
  }

  _verificacaoDataTermino(data) {
    if (!verificarData(data)) {
      return true;
    }
  }
}
