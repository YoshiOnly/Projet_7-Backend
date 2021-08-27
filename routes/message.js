/**
 * Route message
 */

//import/package
const express       = require("express");
const router        = express.Router();
const auth          = require('../middleware/auth');  
const messageCtrl   = require("../controllers/messagesCtrl");
const multer        = require("../middleware/multer-config");

router.post("/",            auth,multer,    messageCtrl.createMessage);  // Post - Création des messages avec les images.

router.put("/", auth, multer, messageCtrl.modifyMessage); // modification des messages

router.get("/all/:id",                      messageCtrl.findAllMessagesForOne); // voir tous les messages

router.get("/:id",                          messageCtrl.findOneMessage); // voir un message

router.get("/",                             messageCtrl.findAllMessages); // voir tous les messages

router.delete("/",           auth,          messageCtrl.deleteMessage); // supprimer un message

//export
module.exports = router;