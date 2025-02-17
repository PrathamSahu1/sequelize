const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('demoDB', 'postgres', 'Acrobat@1', {
    host: 'localhost',
    dialect: 'postgres' 
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const User = require('./user')(sequelize,DataTypes)
  const Contact = require('./contact')(sequelize,DataTypes)

  sequelize.sync({force:false})

  module.exports = {sequelize,User,Contact};