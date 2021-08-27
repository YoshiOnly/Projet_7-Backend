/**
 * Route comment
 */

//packages
const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/commentsCtrl");
const auth = require('../middleware/auth'); 

//voir tous les commentaires
router.get("/",                commentCtrl .findAllComments);
//voir les commentaires d'un message
router.get("/:Messageid",      commentCtrl .findOneComment);
//ajouter un commentaire
router.post("/",         auth,      commentCtrl .createComment);
// supprimer un commentaire
router.delete("/",       auth,      commentCtrl .deleteComment);
//export
module.exports = router;