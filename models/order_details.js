'use strict';
module.export = (sequelize, DataTypes) => {
    const orderDetails = sequelize.define('orderDetails', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        order_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        product_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            } 
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
                isNumeric: true,
            }
        },
    });
    
    orderDetails.associate = function(models) {
        //Associating orderDetails model to Order model
        orderDetails.belongsTo(models.Order, {
            foreignKey: 'order_id'
        });
    };
    
    return orderDetails;
};