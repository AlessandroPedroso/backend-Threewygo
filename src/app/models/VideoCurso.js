import Sequelize, { Model } from 'sequelize';

class VideoCurso extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        link_video: Sequelize.STRING,
        path_image: Sequelize.STRING,
      },
      { sequelize, modelName: 'VideoCurso', tableName: 'videos_cursos' },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Curso, {
      foreignKey: 'curso_id',
      as: 'videoCurso',
    });
  }
}

export default VideoCurso;
