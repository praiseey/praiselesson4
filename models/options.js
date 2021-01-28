'use strict';
module.exports = (sequelize, DataTypes) => {
    const Option = sequelize.define ('Option', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        option_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isAlpha: true,
            }
        },
    });
    
    Option.associate = function(models) {
        // Associating Option model to Product model
        Option.belongsToMany(models.Product, {
            foreignKey: 'option_id',
            through: 'productOption',
        });
    };
    
    return Option;
    
};