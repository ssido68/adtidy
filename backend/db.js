const sqlite3 = require('sqlite3').verbose()
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../db/adtidy_sql_lite.db'

});


//#region  table models
//general : settings
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


//Active Directory Objects
//users
class AdUsers extends Model { }
AdUsers.init({
    objectguid: { type: DataTypes.STRING, primaryKey: true, unique: true },
    samaccountname: DataTypes.STRING,
    whenCreated: DataTypes.DATE,
    whenModified: DataTypes.DATE,
    sn: DataTypes.STRING,
    givenname: DataTypes.STRING,


}, { sequelize, modelName: 'ad_users', timestamps: false });

// iterate through table fields

for (let key in AdUsers.rawAttributes) {
    console.log('Field Name: ', key); // this is name of the field

}
//#endregion

sequelize.sync({ alter: true });

// END OF FILE
const path = require('path');
console.log(">  " + path.basename(__filename) + " loaded.")