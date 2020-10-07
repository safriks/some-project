const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize();

//that expiration date are noted in the Listing

const Product = sequelize.define('Item', {
        EAN: { // serves as id and or primary key
            type: DataTypes.STRING,
            allowNull: false
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unitOfMeasusement: {
            // enum: pieces, grams, kilograms, mililiters, liters
            // defaults to pieces
        },
        grossWeightGrams: {
            type: DataTypes.INT,
            // allowNull defaults to true
        },
        netWeightGrams: {
            type: DataTypes.INT,
            // allowNull defaults to true
        }
});

exports.User = User;