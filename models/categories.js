'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define ('Category', {
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
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        
    });
    Category.associate = function(models) {
        // Associating Category model with Product model
        Category.belongsToMany(models.Product, {
            foreignKey: 'category_id',
            through: 'productCategory',
        });
        
        
    };
    return Category;
};