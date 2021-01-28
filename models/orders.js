'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define ('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
                isNumeric: true
            }
        },
        shipping_address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        order_email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            }
        },
        order_date: {
            type: DataTypes.DATE,
        },
        classMethods: {
            associate: function(models) {
                Order.belongsTo(models.Customer, {
                    foreignKey: 'order_id'
                });
            }
        }
        
    });
    Order.associate = function(models) {
        // Associating Order model to orderDetails model
        models.Order.hasOne(models.orderDetails, {
            onDelete: 'CASCADE',
            foreignKey: 'order_id',
        });
        
        //Associating Order model to Customer model
        models.Order.belongsTo(models.Customer, {
            foreignKey: 'order_id',
            onDelete: 'CASCADE',
        });
        
        //Associating Order model to Product model
        models.Order.belongsToMany(models.Product, {
            foreignKey: 'order_id',
            through: 'orderDetails',
        });
    }
    return Order;
};