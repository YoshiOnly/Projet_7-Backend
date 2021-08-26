/**
 * Application
 */

// Declaration des packages:
const express       = require("express");
const bodyParser    = require("body-parser");
const cors          = require("cors");

//sécurité
const helmet        = require("helmet"); //helmet (pour les header)
const path          = require("path");
const auth          = require("./middleware/auth");
const app           = express();

//Database
const dataBase      = require("./models");

//Routes
const authRoutes    = require("./routes/auth")
const userRoutes    = require("./routes/user")
const messageRoutes = require("./routes/message")
const commentRoutes = require("./routes/comment")

//use(sécurité, parser, database, routes)
app.use(helmet());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dataBase.sequelize.sync();   // Synchronisation de la base de données grâce à Sequelize

app.use("/images",          express.static(path.join(__dirname, "images")));
app.use("/api/auth",        authRoutes);

app.use("/api/users",       auth, userRoutes);
app.use("/api/messages",    auth, messageRoutes);
app.use("/api/comments",    auth, commentRoutes);

//export
module.exports = app