const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize();

//Listing is the data structure bringing together a Vendor with one or more products to specify an offering

const User = sequelize.define('Item', {
        id: {
            type: DataTypes.LONGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        vendorId: {
            type: DataTypes.STRING,
            allowNull: false
            // foreign key - vendor
        },
        productId: {
            type: DataTypes.STRING,
            allowNull: false
            // foreign key - product
        },
        quantity: {
            type: DataTypes.INT,
            allowNull: false
        },
    
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
});

exports.User = User;