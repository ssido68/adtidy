const { Model, DataTypes } = require('sequelize');

class Settings extends Model { }
Settings.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    category: DataTypes.STRING,
    setting: DataTypes.STRING,
    value: DataTypes.STRING
}, { sequelize, modelName: 'settings', timestamps: true });