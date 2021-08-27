// modele class USER pour la base de données.

const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
    User.init({
        userName: { // nom de l'user
            type: DataTypes.STRING,
            allowNull: false
        },
        email: { // mail de l'user
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: { // mot de passe user
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: { // status d'admin de l'user
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, 
    {
        sequelize,
        modelName: "User"
    })
    return User
}