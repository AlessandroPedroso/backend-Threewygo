import Sequelize, { Model } from 'sequelize';

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,
        descricao: Sequelize.STRING,
        data_termino: Sequelize.DATE,
        img_curso: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3000/curso-file/${this.img_curso}`;
          },
        },
      },
      { sequelize, modelName: 'Curso', tableName: 'curso' },
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.VideoCurso, {
      foreignKey: 'curso_id',
      as: 'videos',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

export default Curso;
