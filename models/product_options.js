'use strict';
module.exports = (sequelize, DataTypes) => {
    const productOption = sequelize.define ('productOption', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        option_id: {
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
    });
    
    return productOption;
};
