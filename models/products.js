'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define ('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isAlpha: true,
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isUrl: true,
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        created_dt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
    
    Product.associate = function(models) {
        // Associating Product model to Order model
        Product.belongsToMany(models.Order, {
            foreignKey: 'product_id',
            through: 'orderDetails',
        });
        
        // Associating Product model to Category model
        Product.belongsToMany(models.Category, {
            foreignKey: 'product_id',
            through: 'productCategory',
        });
        
        // Associating Product model to Option model
        Product.belongsToMany(models.Option, {
            foreignKey: 'product_id',
            through: 'productOption',
        });
    };
    
    return Product;
};