import Sequelize, { Model } from 'sequelize';

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,
        descricao: Sequelize.STRING,
        ativo: Sequelize.BOOLEAN,
        data_determino: Sequelize.DATE,
      },
      { sequelize },
    );
    return this;
  }
}

export default Curso;
