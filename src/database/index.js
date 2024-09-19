import Sequelize from 'sequelize';
import Curso from '../app/models/Curso.js';
import VideoCurso from '../app/models/VideoCurso.js';
import configDataBase from '../config/database.js';

const models = [Curso, VideoCurso];

class DataBase {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(configDataBase);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new DataBase();
