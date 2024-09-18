import Sequelize, { Model } from 'sequelize';

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,
        descricao: Sequelize.STRING,
        data_termino: Sequelize.DATE,
      },
      { sequelize, tableName: 'curso' },
    );
    return this;
  }
}

export default Curso;
