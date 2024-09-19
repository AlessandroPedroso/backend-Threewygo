import Sequelize, { Model } from 'sequelize';

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,
        descricao: Sequelize.STRING,
        data_termino: Sequelize.DATE,
      },
      { sequelize, modelName: 'Curso', tableName: 'curso' },
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.VideoCurso, {
      foreignKey: 'curso_id',
      as: 'videos',
    });
  }
}

export default Curso;
