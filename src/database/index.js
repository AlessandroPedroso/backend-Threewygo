import Sequelize from 'sequelize';
import configDataBase from '../config/database.js';

class DataBase {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(configDataBase);
  }
}

export default new DataBase();
