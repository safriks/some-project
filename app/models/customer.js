const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize();

const User = sequelize.define('Customer', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        }
});

exports.User = User;