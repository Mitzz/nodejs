const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', 'Diebold@123', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3310
});

module.exports = sequelize;
