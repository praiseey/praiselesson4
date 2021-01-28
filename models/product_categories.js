module.exports = (sequelize, DataTypes) => {
    const productCategory = sequelize.define ('productCategory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            } 
        },
        category_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            } 
        },
    });
    
    return productCategory;
};