/**
 * Route use
 */

const express       = require("express");
const router        = express.Router();
const userCtrl      = require("../controllers/usersCtrl");
const auth          = require('../middleware/auth'); 


//voir tous les users
router.get("/all/",              userCtrl.findAllUsers)
//voir un user
router.get("/:id",               userCtrl.findOneUser)
//supprimer un user
router.delete("/",      auth,    userCtrl.deleteOneUser)
//supprimer son compte
router.delete("/:id",   auth,    userCtrl.deleteMyAccount)

module.exports = router
