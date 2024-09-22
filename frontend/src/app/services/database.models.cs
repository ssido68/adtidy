import { Sequelize, DataTypes } from 'sequelize';

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});