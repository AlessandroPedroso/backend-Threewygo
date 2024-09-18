import Sequelize from 'sequelize';
import Curso from '../app/models/Curso.js';
import configDataBase from '../config/database.js';

const models = [Curso];

class DataBase {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(configDataBase);
    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
