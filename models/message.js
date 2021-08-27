// modele class message pour la base de données.
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Message extends Model {}
  
    Message.init({
        message: {
            type: DataTypes.TEXT // content du message
        },
        messageUrl: { //Url de l'image
            type: DataTypes.STRING
        }
    }, 
    {
        sequelize,
        modelName: "Message"
    })
    return Message
}